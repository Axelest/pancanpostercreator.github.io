export const getOrientation = (originalFile: File, callback: Function) => {
     var reader = new FileReader();
     let canvas = document.createElement('canvas');
     let ctx: any = canvas.getContext('2d');
     let image = new Image();

     reader.onload = (event: ProgressEvent) => {
          if (!event.target) {
               return;
          }

          const file = event.target as FileReader;
          const view = new DataView(file.result as ArrayBuffer);

          image.src = URL.createObjectURL(originalFile);
          if (view.getUint16(0, false) !== 0xffd8) {
               return callback(-2, image.src);
          }

          const length = view.byteLength;
          let offset = 2;

          while (offset < length) {
               if (view.getUint16(offset + 2, false) <= 8) {
                    return callback(-1, image.src);
               }

               let marker = view.getUint16(offset, false);
               offset += 2;

               if (marker === 0xffe1) {
                    if (view.getUint32((offset += 2), false) !== 0x45786966) {
                         return callback(-1, image.src);
                    }

                    let little = view.getUint16((offset += 6), false) == 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    let tags = view.getUint16(offset, little);
                    offset += 2;
                    for (let i = 0; i < tags; i++) {
                         if (
                              view.getUint16(offset + i * 12, little) == 0x0112
                         ) {
                              const result = view.getUint16(
                                   offset + i * 12 + 8,
                                   little
                              );
                              image.onload = () => {
                                   canvas.width = image.width;
                                   canvas.height = image.height;
                                   ctx.save();
                                   ctx.translate(
                                        image.width / 2,
                                        image.height / 2
                                   );
                                   switch (result) {
                                        case 1:
                                             ctx.rotate((360 * Math.PI) / 180);
                                             ctx.drawImage(
                                                  image,
                                                  -(image.width / 2),
                                                  -(image.height / 2)
                                             );
                                             ctx.restore();
                                             return callback(
                                                  result,
                                                  canvas.toDataURL()
                                             );

                                        case 8:
                                             ctx.rotate((270 * Math.PI) / 180);
                                             ctx.drawImage(
                                                  image,
                                                  -(image.width / 2),
                                                  -(image.height / 2)
                                             );
                                             ctx.restore();
                                             return callback(
                                                  result,
                                                  canvas.toDataURL()
                                             );

                                        case 3:
                                             ctx.rotate((180 * Math.PI) / 180);
                                             ctx.drawImage(
                                                  image,
                                                  -(image.width / 2),
                                                  -(image.height / 2)
                                             );
                                             ctx.restore();
                                             return callback(
                                                  result,
                                                  canvas.toDataURL()
                                             );

                                        case 6:
                                             ctx.rotate((90 * Math.PI) / 180);
                                             ctx.drawImage(
                                                  image,
                                                  -(image.width / 2),
                                                  -(image.height / 2)
                                             );
                                             ctx.restore();
                                             return callback(
                                                  result,
                                                  canvas.toDataURL()
                                             );

                                        default:
                                             return callback(
                                                  result,
                                                  'nothing here'
                                             );
                                   }
                              };
                              return callback(result);
                         }
                    }
               } else if ((marker & 0xff00) != 0xff00) {
                    break;
               } else {
                    offset += view.getUint16(offset, false);
               }
          }
          return callback(-1, image.src);
     };

     reader.readAsArrayBuffer(originalFile);
};
