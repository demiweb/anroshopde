// jQuery('#pewc_group_30224_30225, #pewc_group_29_12737,#pewc_group_29_12743,#pewc_group_29_12746,#pewc_group_29_12742,#pewc_group_29_11273,#pewc_group_29_12709,#pewc_group_29_12709,#pewc_group_29_111,#pewc_group_29_110,#pewc_group_29_94,#pewc_group_29_98,#pewc_group_29_99,#pewc_group_29_59,#pewc_group_29_118,#pewc_group_29_119,#pewc_group_29_118,#pewc_group_29_142,#pewc_group_29_118,#pewc_group_29_146,#pewc_group_29_118,#pewc_group_29_147').keyup(function () {
//     draw();
// });
//
// jQuery('.pewc-form-field,#pewc_group_29_60,#pewc_group_30224_30226,#pewc_group_30224_30227').keyup(function () {
//     draw();
// });
//
// jQuery('#pewc_group_29_59,#pewc_group_29_52,#pewc_group_73784_73785,#pewc_group_73784_73786').keyup(function () {
//     draw();
// });

let btnsCustomOrder = [...document.querySelectorAll('.canvasproduct--custom .single_add_to_cart_button')];
if (btnsCustomOrder.length) {
    btnsCustomOrder.forEach((bt) => {
        bt.addEventListener("click", async function () {
            const canvas = document.querySelector('.svg-canvas-wrap canvas');
            const {jsPDF} = window.jspdf;

            const imgDataURL = canvas.toDataURL("image/png");
            const pngBlob = await (await fetch(imgDataURL)).blob();

            const pdf = new jsPDF({orientation: "landscape", unit: "mm", format: "a4"});
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
            const imgWidth = canvas.width * ratio;
            const imgHeight = canvas.height * ratio;
            const x = (pageWidth - imgWidth) / 2;
            const y = (pageHeight - imgHeight) / 2;

            pdf.addImage(imgDataURL, "PNG", x, y, imgWidth, imgHeight);
            const pdfBlob = pdf.output("blob");

            const randomString = Math.random().toString(36).substring(2, 10);
            const timestamp = Date.now();
            const fileBaseName = `canvas_${timestamp}_${randomString}`;

            const formData = new FormData();
            formData.append("image", pngBlob, `${fileBaseName}.png`);
            formData.append("pdf", pdfBlob, `${fileBaseName}.pdf`);

            const response = await fetch("upload.php", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                alert("gg");
            } else {
                alert("Failed!!!");
            }
        });
    })
}

jQuery(document).on('input', 'input.pewc-number-field', function () {
    let val = $(this).val();
    if (val.includes('.')) {
        let parts = val.split('.');
        parts[1] = parts[1].slice(0, 1);
        jQuery(this).val(parts[0] + '.' + parts[1]);
    }
});
let figureWidth = 1;
let lengthFigures = 2;
if ([...document.querySelectorAll('.pewc-field-triggers-condition .pewc-radio-checkbox-image-wrapper')].length < 2) {
    document.querySelector('.pewc-field-triggers-condition').classList.add('hd-slt');
    lengthFigures = 1;
}
;
let imagesFarba = [...document.querySelectorAll('.pewc-item-radio:not(.pewc-field-triggers-condition)[data-field-label="Farbe"] .pewc-radio-checkbox-image-wrapper')];
console.log(imagesFarba);
console.log('farbas');
if (document.querySelector('.canvasproduct .woo-variation-gallery-slider-wrapper')) {
    let canvasDiv = document.createElement('div');
    canvasDiv.classList.add('svg-canvas-wrap');
    document.querySelector('.product-main__custom-slider').appendChild(canvasDiv);
}
let initedFarba = false;

function farbasControl() {
    // console.log('inited?');
    let saveFirstSlideImage = document.querySelector('.woo-variation-gallery-slider-wrapper .slick-slide[data-slick-index="0"] img').src;
    let saveFirstSlideImageSrcSet = document.querySelector('.woo-variation-gallery-slider-wrapper .slick-slide[data-slick-index="0"] img').srcset;

    let dotsBack = [...document.querySelectorAll('.product-main__canvas-slider .dots .single-dot')];


    if (dotsBack.length) {
        dotsBack.forEach((rb) => {
            rb.addEventListener('click', () => {
                [...document.querySelectorAll('.product-main__slider .swiper-slide img')][0].src = saveFirstSlideImage;
            })
        })
    }

    if (initedFarba === false) {
        if (imagesFarba.length) {


            imagesFarba.forEach((frb) => {
                let inp = frb.querySelector('input');
                let im = frb.querySelector('img').dataset.alt_image;
                // console.log('frabs +');
                inp.addEventListener('click', () => {
                    if (inp.checked === true) {
                        if (document.querySelector('.pewc-field-triggers-condition .pewc-radio-checkbox-image-wrapper').classList.contains('checked')) {
                        } else {
                            if (lengthFigures === 1) {
                                document.querySelector('.pewc-field-triggers-condition .pewc-radio-checkbox-image-wrapper label').click();
                            }
                        }
                        $('.woo-variation-gallery-slider').slick('slickGoTo', 0, false);
                        document.querySelector('.woo-variation-gallery-slider-wrapper .slick-slide[data-slick-index="0"] img').src = im;
                        document.querySelector('.woo-variation-gallery-slider-wrapper .slick-slide[data-slick-index="0"] img').srcset = im;
                        document.querySelector('.product-main__custom-slider').classList.remove('hd-sld');

                    }
                });

            });
            initedFarba = true;
        }
    }
    jQuery('.pewc-form-field').on('input', function () {

        jQuery('.product-main__custom-slider').addClass('hd-sld');
        if (document.querySelector('.pewc-field-triggers-condition .pewc-radio-checkbox-image-wrapper').classList.contains('checked')) {
        } else {
            if (lengthFigures === 1) {
                document.querySelector('.pewc-field-triggers-condition .pewc-radio-checkbox-image-wrapper label').click();
            }
        }
    });
    jQuery('.pewc-radio-images-wrapper.pewc-hide-labels .pewc-radio-image-wrapper label input').on('change', function () {

        jQuery('.product-main__custom-slider').addClass('hd-sld');

    });
    setTimeout(() => {
        jQuery('.woo-variation-gallery-thumbnail-wrapper img').each(function () {
            jQuery(this).on('click', function () {
                // console.log('clicked2tish');
                jQuery('.product-main__custom-slider').removeClass('hd-sld');
            });
        });
        let thumbsBack = [...document.querySelectorAll('.woo-variation-gallery-thumbnail-slider img')];
        if (thumbsBack.length) {
            // console.log('thumbs +');
            // console.log(thumbsBack);
            thumbsBack.forEach((rb) => {
                rb.addEventListener('click', () => {
                    document.querySelector('.woo-variation-gallery-slider-wrapper .slick-slide[data-slick-index="0"] img').src = saveFirstSlideImage;
                    document.querySelector('.woo-variation-gallery-slider-wrapper .slick-slide[data-slick-index="0"] img').srcset = saveFirstSlideImageSrcSet;
                }, true);
            })
        }
    }, 2000);

}

function farbasImages2() {
    // if (imagesFarba.length) {
    console.log('farba +');
    if ($('.woo-variation-gallery-slider').hasClass('slick-initialized')) {
        console.log('inited3');
    }
    const waitForSlick = setInterval(() => {
        const $slider = $('.woo-variation-gallery-slider');
        if ($slider.hasClass('slick-initialized')) {
            clearInterval(waitForSlick);
            farbasControl();
            // console.log('ahada');
        } else {
            // console.log('');
        }
    }, 100);

    // }
}



jQuery('.pewc-form-field').on('input', function () {
    draw();
    jQuery('.product-main__custom-slider').addClass('hd-sld');
});
jQuery('.pewc-form-field').keyup(function () {
    draw();
    jQuery('.product-main__custom-slider').addClass('hd-sld');
});

const step = 20;

function get_field(name) {
    var labels = document.getElementsByTagName('h4');
    //console.log('find:',name);
    for (var i = 0; i < labels.length; i++) {
        //console.log(labels[i].textContent);
        if (labels[i].textContent.indexOf(name + ' in') !== -1) {
            console.log('Found:', name, jQuery(labels[i].nextSibling).val());
            id = '#' + jQuery(labels[i]).attr("for");
            console.log(id);
            return parseFloat(jQuery(id).val().replace(',', '.'));
            break;
        }
    }
}

let midArr1X = 0;
let midArr1Y = 0;

let midArr2X = 0;
let midArr2Y = 0;

let midArr3X = 0;
let midArr3Y = 0;

function canvas_arrow(context, fromx, fromy, tox, toy) {
    // let canvas = document.getElementById('canvas');
    // let context = canvas.getContext('2d');
    // context.beginPath(); // begin
    context.lineWidth = 1;
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);

    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    context.moveTo(fromx, fromy);
    context.lineTo(fromx + headlen * Math.cos(angle - Math.PI / 6), fromy + headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(fromx, fromy);
    context.lineTo(fromx + headlen * Math.cos(angle + Math.PI / 6), fromy + headlen * Math.sin(angle + Math.PI / 6));
    context.strokeStyle = '#000';
    context.closePath(); // close
    context.stroke();
}

function drawTtext(points) {
    var canvas = document.getElementById('canvas');

    console.log(points);

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath(); // begin

        jQuery.each(points, function (index, value) {
            //if(index>0){
            ctx.fillStyle = '#000';
            ctx.font = "normal 24px Arial";
            let textWidth = ctx.measureText(value[0]).width;
            let adjustedX = Number(value[1][0]);
            console.log(value[1][0] + ' va1 ' + (textWidth / 2) + ' text w' + ' var ' + value[0] + ' number ' + value[2]);

            if (value[2] === 2) {
                ctx.fillText(`${value[0]}`, (adjustedX - (ctx.measureText(value[0]).width / 2)), value[1][1] - 6);
            }
            if (value[2] === 1) {
                ctx.fillText(`${value[0]}`, (value[1][0] - ctx.measureText(value[0]).width - 16), value[1][1]);
            }
            if (value[2] === 3) {
                ctx.fillText(`${value[0]}`, (adjustedX - (ctx.measureText(value[0]).width / 2)), value[1][1] - 8);
            }

            //ctx.rotate(value[1][2] * Math.PI / 180);
            //}

        });


        ctx.closePath(); // close
        ctx.strokeStyle = '#000'; // close
        ctx.stroke();
    }
}


function draw13(x, y, w, h, rad) {
    var canvas = document.getElementById('canvas');


    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.scale(1, 1);
        ctx.clearRect(0, 0, 1200, 1200);
        ctx.beginPath();
        ctx.arc(x + rad, y + rad, rad, Math.PI, Math.PI + Math.PI / 2, false);
        ctx.lineTo(x + w - rad, y);
        ctx.arc(x + w - rad, y + rad, rad, Math.PI + Math.PI / 2, Math.PI * 2, false);
        ctx.lineTo(x + w, y + h);
        //ctx.arc(x + w - rad, y + h - rad, rad, Math.PI * 2, Math.PI / 2, false);
        ctx.lineTo(x, y + h);
        //ctx.arc(x + rad, y + h - rad, rad, Math.PI / 2, Math.PI, false);
        ctx.closePath(); // close
        ctx.stroke();
    }
}

function clipper(x, y, w, h, rad, points2, points3) {

    //x=x+20;
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, 1200, 1200);
        ctx.beginPath();
        ctx.lineWidth = figureWidth;
        //rad=rad*2;
        // ctx.strokeStyle = '#000';
        //ctx.fillStyle = '#A55D02';
        console.log('rad=' + rad + ' x+rad=' + (x + rad) + ' y+rad=' + (y + rad));
        ctx.arc(x + rad, y + rad, rad, Math.PI, Math.PI + Math.PI / 2, false);
        ctx.lineTo(x + w - rad, y);
        ctx.arc(x + w - rad, y + rad, rad, Math.PI + Math.PI / 2, Math.PI * 2, false);
        ctx.lineTo(x + w, y + h - rad);
        ctx.arc(x + w - rad, y + h - rad, rad, Math.PI * 2, Math.PI / 2, false);
        ctx.lineTo(x + rad, y + h);
        ctx.arc(x + rad, y + h - rad, rad, Math.PI / 2, Math.PI, false);
        ctx.lineTo(x, y + rad);
        ctx.fillStyle = '#B28D53';
        ctx.fill();

        ctx.fillStyle = '#B28D53';
        ctx.closePath(); // close
        ctx.stroke();
        canvas_arrow(ctx, points2[0][0] - step * 2, points2[0][1], points2[1][0] - step * 2, points2[1][1]);

        midArr1X = ((points2[0][0] - step * 2) + (points2[1][0] - step * 2)) / 2;
        midArr1Y = ((points2[0][1]) + (points2[1][1])) / 2;

        canvas_arrow(ctx, points3[0][0], points3[0][1] + step * 2, points3[1][0], points3[1][1] + step * 2);

        midArr2X = ((points3[0][0]) + (points3[1][0])) / 2;
        midArr2Y = ((points3[0][1] + step * 2) + (points3[1][1] + step * 2)) / 2;

        canvas_arrow(ctx, points2[0][0], points2[0][1] - step * 2, points2[0][0] + rad, points2[0][1] - step * 2);

        midArr3X = ((points2[0][0]) + (points2[0][0] + rad)) / 2;
        midArr3Y = ((points2[0][1] - step * 2) + (points2[0][1] - step * 2)) / 2;

        ctx.closePath(); // close
        ctx.stroke();
    }
}

function draw10(points, ww) {
    var canvas = document.getElementById('canvas');


    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');


        ctx.clearRect(0, 0, 1200, 1200);

        ctx.beginPath(); // begin


        ctx.moveTo(60, 60);
        ctx.lineTo(60, ww + 60);
        ctx.lineTo(ww + 60, ww + 60);
        ctx.moveTo(60, ww + 60);
        //ctx.moveTo(ww, ww);
        ctx.arc(60, ww + 60, ww, 1.5 * Math.PI, 0, false);


        ctx.closePath(); // close
        ctx.strokeStyle = '#000';
        ctx.stroke();
    }
}

function draw12(ww) {
    let canvas = document.getElementById('canvas');
    //const step=4;

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');


        ctx.clearRect(0, 0, 1200, 1200);

        ctx.beginPath(); // begin


        //ctx.moveTo(160, 160);
        //ctx.lineTo(20, ww+20);
        ctx.lineWidth = figureWidth;
        ctx.arc(30 * step, 30 * step, ww / 2, 0 * Math.PI, 2 * Math.PI, false);
        ctx.fillStyle = '#B28D53';
        ctx.fill();
        ctx.closePath(); // close
        ctx.stroke();
        ctx.fillStyle = '#B28D53';
        ctx.strokeStyle = '#000';

        canvas_arrow(ctx, 26 * step - ww / 2, 30 * step - ww / 2, 26 * step - ww / 2, 30 * step + ww / 2);
        midArr1X = ((26 * step - ww / 2) + (26 * step - ww / 2)) / 2;
        midArr1Y = ((30 * step - ww / 2) + (30 * step + ww / 2)) / 2;
        //canvas_arrow(ctx, points3[0][0], points3[0][1], points3[1][0], points3[1][1]);

        ctx.closePath(); // close
        ctx.stroke();
    }
}

function draw11(ww) {
    var canvas = document.getElementById('canvas');

    //const step=4;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');


        ctx.clearRect(0, 0, 1200, 1200);

        ctx.beginPath(); // begin
        ctx.lineWidth = figureWidth;

        ctx.moveTo(30 * step - ww / 4, 30 * step - ww / 2);
        ctx.lineTo(30 * step - ww / 4, 30 * step + ww / 2);

        ctx.arc(30 * step - ww / 4, 30 * step, ww / 2, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fillStyle = '#B28D53';
        ctx.fill();

        ctx.fillStyle = '#B28D53';

        ctx.closePath(); // close
        ctx.stroke();
        ctx.strokeStyle = '#000';
        canvas_arrow(ctx, 26 * step - ww / 4, 30 * step - ww / 2, 26 * step - ww / 4, 30 * step + ww / 2);

        midArr1X = ((26 * step - ww / 4) + (26 * step - ww / 4)) / 2;
        midArr1Y = ((30 * step - ww / 2) + (30 * step + ww / 2)) / 2;

        canvas_arrow(ctx, 30 * step - ww / 4, 34 * step + ww / 2, 30 * step + ww / 4, 34 * step + ww / 2);

        midArr2X = ((30 * step - ww / 4) + (30 * step + ww / 4)) / 2;
        midArr2Y = ((34 * step + ww / 2) + (34 * step + ww / 2)) / 2;
        ctx.closePath(); // close
        ctx.strokeStyle = '#000';
        ctx.stroke();
    }
}

function drawTetragon(points, points2, points3) {
    var canvas = document.getElementById('canvas');


    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');


        ctx.clearRect(0, 0, 1200, 1200);
        ctx.beginPath(); // begin
        ctx.lineWidth = figureWidth;
        ctx.moveTo(points[0][0], points[0][1]);
        jQuery.each(points, function (index, value) {
            if (index > 0) {
                ctx.lineTo(value[0], value[1]);
            }
        });

        ctx.lineTo(points[0][0], points[0][1]);

        ctx.fillStyle = '#B28D53';
        ctx.fill();
        ctx.fillStyle = '#B28D53';


        ctx.strokeStyle = '#000';
        ctx.closePath(); // close
        ctx.stroke();

        canvas_arrow(ctx, points2[0][0] - step * 2, points2[0][1], points2[1][0] - step * 2, points2[1][1]);
        midArr1X = ((points2[0][0] - step * 2) + (points2[1][0] - step * 2)) / 2;
        midArr1Y = ((points2[0][1]) + (points2[1][1])) / 2;

        canvas_arrow(ctx, points3[0][0], points3[0][1] + step * 2, points3[1][0], points3[1][1] + step * 2);

        midArr2X = ((points3[0][0]) + (points3[1][0])) / 2;
        midArr2Y = ((points3[0][1] + step * 2) + (points3[1][1] + step * 2)) / 2;

        ctx.closePath(); // close
        ctx.strokeStyle = '#000';
        ctx.stroke();

    }
}

function drawEllipse(x, y, a, b) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, 1200, 1200);

        ctx.beginPath();
        ctx.lineWidth = figureWidth;
        ctx.ellipse(x, y, a, b, Math.PI / 1, 0, 2 * Math.PI);


        ctx.fillStyle = '#B28D53';
        ctx.fill();

        ctx.fillStyle = '#B28D53';

        ctx.closePath(); // close
        ctx.strokeStyle = '#000';
        ctx.stroke();
        canvas_arrow(ctx, 26 * step - a, 30 * step - b, 26 * step - a, 30 * step + b);
        midArr1X = ((26 * step - a) + (26 * step - a)) / 2;
        midArr1Y = ((30 * step - b) + (30 * step + b)) / 2;

        canvas_arrow(ctx, 30 * step - a, 32 * step + b, 30 * step + a, 32 * step + b);

        midArr2X = ((30 * step - a) + (30 * step + a)) / 2;
        midArr2Y = ((32 * step + b) + (32 * step + b)) / 2;

        ctx.closePath(); // close
        ctx.stroke();
    }
}

function drawCircle(x, y, radius) {

    var canvas = document.getElementById('canvas');


    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, 1200, 1200);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        ctx.closePath(); // close
        ctx.stroke();
    }


}


function drawHalfCircle(x, y, radius) {

    var canvas = document.getElementById('canvas');


    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, 1200, 1200);
        ctx.beginPath();

        ctx.arc(x, y, radius, Math.PI, 0, true);


        ctx.closePath(); // close
        ctx.stroke();
    }


}


farbasImages2();


function draw() {
    console.log('draw began');
    //const step=4;
    const mw = step * 60;
    const mh = step * 60;
    if (!jQuery('#canvas').length) {
        console.log('create canvas');
        //jQuery('.woocommerce-product-gallery__wrapper').html('<canvas id="canvas" width="' + mw + '" height="' + mh + '"></canvas>');


        // const newNode = document.createElement("div");
        // newNode.setAttribute('width','20em');
        // newNode.innerHTML = '<canvas id="canvas" width="' + mw + '" height="' + mh + '"></canvas>';
        // const current = document.getElementsByClassName("pewc-product-extra-groups-wrap")[0];
        // const parentDiv = current.parentNode;
        // parentDiv.insertBefore(newNode, current);

        //jQuery('.delivery-time-info').html('<canvas id="canvas" width="' + mw + '" height="' + mh + '"></canvas>');

        jQuery('.product-main__custom-slider').addClass('hd-sld');
        jQuery('.product-main__custom-slider .svg-canvas-wrap').html('<canvas id="canvas" width="' + mw + '" height="' + mh + '"></canvas>');
        jQuery('.product-main__custom-slider .svg-canvas-wrap').html('<canvas id="canvas" width="' + mw + '" height="' + mh + '"></canvas>');


    }
    xx = step * 6;
    yy = step * 6;


    dots = Array();
    dots1 = Array();
    dots2 = Array();
    text = Array();

    let rindex = -1;
    console.log('size:', jQuery('.pewc-group-image_swatch .pewc-radio-form-field').length);
    if (jQuery('.pewc-group .pewc-radio-form-field').length == 1) {
        // rindex = 3;
    } else {
        jQuery('.pewc-group-image_swatch .pewc-hide-labels .pewc-radio-form-field').each(function (index) {
            if (jQuery(this).is(':checked')) {
                rindex = index + 1;

                const wrapper = jQuery(this).closest('.pewc-radio-checkbox-image-wrapper');
                const img = wrapper.find('img');

                if (img.length > 0) {
                    const src = img.attr('src');
                    if (src.includes('figure-rechteck')) {
                        if (!src.includes('figure-rechteckecken')) {
                            rindex = 1;
                            document.querySelector('.single_add_to_cart_button').style.pointerEvents = 'auto';
                            document.querySelector('.single_add_to_cart_button').style.opacity = '1';
                        }
                    }
                    if (src.includes('figure-rund')) {
                        rindex = 2;
                        document.querySelector('.single_add_to_cart_button').style.pointerEvents = 'auto';
                        document.querySelector('.single_add_to_cart_button').style.opacity = '1';
                    }
                    if (src.includes('figure-rechteckecken')) {
                        rindex = 3;
                    }
                    if (src.includes('figure-ellipse')) {
                        rindex = 4;
                        document.querySelector('.single_add_to_cart_button').style.pointerEvents = 'auto';
                        document.querySelector('.single_add_to_cart_button').style.opacity = '1';
                    }
                    if (src.includes('figure-halbkreis')) {
                        rindex = 5;
                        document.querySelector('.single_add_to_cart_button').style.pointerEvents = 'auto';
                        document.querySelector('.single_add_to_cart_button').style.opacity = '1';
                    }
                    if (src.includes('figure-oval')) {
                        rindex = 6;
                        document.querySelector('.single_add_to_cart_button').style.pointerEvents = 'auto';
                        document.querySelector('.single_add_to_cart_button').style.opacity = '1';
                    }
                }

                return false;
            }
            if (rindex > 0) return false;
        });
    }
    //if(rindex>-1)alert(rindex);
    console.log('rindex:', rindex);
    console.log("selected index: " + jQuery('.pewc-radio-form-field:checked').val());


    if (rindex == 6) {


        //ww = parseFloat(jQuery('#pewc_group_29_59').val().replace(',', '.'));
        //hh = parseFloat(jQuery('#pewc_group_29_60').val().replace(',', '.'));
        ww = get_field('Breite');

        hh = get_field('Länge');

        if (ww > hh) {

            text.push(Array('Länge muss größer als Breite sein!', [150, 150]));
            text.push(Array('Bitte korrigieren Sie Ihre Eingabe!', [150, 200]));

            var canvas = document.getElementById('canvas');

            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.font = "normal 26px Arial";
                ctx.clearRect(0, 0, 1200, 1200);
                ctx.beginPath();
                drawTtext(text);
                ctx.font = "normal 24px Arial";
                return;
            }


        }
        l1 = ww / 2;

//        console.log(l1,ww/2);

        if (l1 > (ww / 2)) {

            //     l1=ww/2;
            //   jQuery('#pewc_group_29_11273').val(l1);

            text.push(Array('Radius muss max 1/2 von Breite sein!', [150, 150]));
            text.push(Array('Bitte korrigieren Sie Ihre Eingabe!', [150, 200]));

            var canvas = document.getElementById('canvas');

            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.font = "normal 26px Arial";
                ctx.clearRect(0, 0, step * 60, step * 60);
                ctx.beginPath();
                drawTtext(text);
                ctx.font = "normal 24px Arial";
                return;
            }


        }

        rww = ww;
        rhh = hh;

        lr = rww / l1;

        if (ww > hh) {

            if (ww > mw) {


                r = ww / (mw - step * 10);
                ww = ww / r;
                hh = hh / r;
                //              l2=l1/r;
            } else {

                r = mw / (ww);
                ww = ww * r - step * 10;
                hh = hh * r - step * 10;
                //            l2=l1*r;
            }
        } else {
            if (hh > mh) {


                r = hh / (mh - step * 10);
                ww = ww / r;
                hh = hh / r;
//                l2=l1/r;
            } else {

                r = mh / (hh);
                ww = ww * r - step * 10;
                hh = hh * r - step * 10;
//                l2=l1*r;
            }
        }
        xx = mw / 2 - ww / 2;
        yy = mh / 2 - hh / 2;

        xx = xx + step * 4;

        dots1.push(Array(xx - step, yy));
        dots1.push(Array(xx - step, yy + hh));

        dots2.push(Array(xx, yy + hh + step));
        dots2.push(Array(xx + ww, yy + hh + step));

//        r=rww/l1;
//        l2=l1*r;

//        if ((l2*2)>ww)l2=ww;

        console.log('clipper', ww, lr);

        clipper(xx, yy + step, ww * 1, hh * 1, (ww / lr) * 1, dots1, dots2);

        text.push(Array(rhh + ' cm', [midArr1X, midArr1Y], 1));
        text.push(Array(rww + ' cm', [midArr2X, midArr2Y], 2));

        text.push(Array(l1 + ' cm', [midArr3X, midArr3Y], 3));

        // text.push(Array('Kante' + ' ' + l1 + ' cm', [xx + step*10, yy - step]));

        drawTtext(text);
    }

    if (rindex == 3) {
        hh = get_field('Länge');
        ww = get_field('Breite');//parseFloat(jQuery('#pewc_group_29_59').val().replace(',', '.'));
        // console.log(ww);

        //parseFloat(jQuery('#pewc_group_29_60').val().replace(',', '.'));

        // if (ww > hh) {
        if (ww > 10000) {

            text.push(Array('Länge muss größer als Breite sein!', [150, 150]));
            text.push(Array('Bitte korrigieren Sie Ihre Eingabe!', [150, 200]));

            var canvas = document.getElementById('canvas');

            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.font = "normal 26px Arial";
                ctx.clearRect(0, 0, 1200, 1200);
                ctx.beginPath();
                ctx.lineWidth = figureWidth;
                drawTtext(text);
                ctx.font = "normal 24px Arial";
                return;
            }


        }


        l1 = get_field('Radius');//parseFloat(jQuery('#pewc_group_29_11273').val().replace(',', '.'));
        // console.log(l1);
        if (!l1) l1 = 5;
//        console.log(l1,ww/2);

        if (l1 > (ww / 2) || l1 > (hh / 2)) {

            //     l1=ww/2;
            //   jQuery('#pewc_group_29_11273').val(l1);
            document.querySelector('.single_add_to_cart_button').style.pointerEvents = 'none';
            document.querySelector('.single_add_to_cart_button').style.opacity = '0.3';
            text.push(Array('Radius muss max 1/2 von Breite sein!', [600, 550], 3));
            text.push(Array('Bitte korrigieren Sie Ihre Eingabe!', [600, 650], 3));

            var canvas = document.getElementById('canvas');

            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.font = "normal 26px Arial";
                ctx.clearRect(0, 0, 1200, 1200);
                ctx.beginPath();
                ctx.lineWidth = figureWidth;
                drawTtext(text);
                ctx.font = "normal 24px Arial";
                return;
            }


        } else {
            document.querySelector('.single_add_to_cart_button').style.pointerEvents = 'auto';
            document.querySelector('.single_add_to_cart_button').style.opacity = '1';
        }

        rww = ww;
        rhh = hh;

        lr = rww / l1;

        if (ww > hh) {

            if (ww > mw) {


                r = ww / (mw - step * 10);
                ww = ww / r;
                hh = hh / r;
                //              l2=l1/r;
            } else {

                r = mw / (ww);
                ww = ww * r - step * 10;
                hh = hh * r - step * 10;
                //            l2=l1*r;
            }
        } else {
            // console.log(mh + ' mh');
            if (hh > mh) {


                r = hh / (mh - step * 10);
                ww = ww / r;
                hh = hh / r;
//                l2=l1/r;
            } else {
                // console.log('tut1');


                r = mh / hh;
                ww = ww * r;
                hh = (hh * r) - step * 10;
//                l2=l1*r;
            }
        }
        xx = step * 38 - ww / 2;
        yy = step * 30 - hh / 2;
        ww = ww * 0.8;
        // xx = xx + step * 4;

        dots1.push(Array(xx - step, yy));
        dots1.push(Array(xx - step, yy + hh));

        dots2.push(Array(xx, yy + hh + step));
        dots2.push(Array(xx + ww, yy + hh + step));

//        r=rww/l1;
//        l2=l1*r;

//        if ((l2*2)>ww)l2=ww;

        //console.log(lr);
        // console.log(ww + ' ww ' + lr + ' lr');
        clipper(xx, yy, ww * 1, hh * 1, (ww / lr) * 1, dots1, dots2);

        //text.push(Array(jQuery("label[for*=\'pewc_group_29_60\']").text() + ' ', [xx - step*7, yy + hh / 2]));
        text.push(Array(rhh + ' cm', [midArr1X, midArr1Y], 1));

        text.push(Array(rww + ' cm', [midArr2X, midArr2Y], 2));

        text.push(Array(l1 + ' cm', [midArr3X, midArr3Y], 3));

        drawTtext(text);

    }

    if (rindex == 1) {

        hh = get_field('Länge');
        ww = get_field('Breite');
        console.log(ww + ' wwwwww');
        console.log(hh + ' wwwwwhhhw');
        rww = ww;
        rhh = hh;

        if (ww > hh) {

            if (ww > mw) {
                r = ww / (mw - step * 10);
                ww = ww / r;
                hh = hh / r;
            } else {
                r = mw / (ww);
                ww = ww * r - step * 10;
                hh = hh * r - step * 10;
            }
        } else {

            if (hh > mh) {
                r = hh / (mh - step * 10);
                ww = ww / r;
                hh = hh / r;
                // console.log('hh1:',hh);
            } else {
                console.log('trsas112');
                r = mh / hh;
                ww = ww * r;
                hh = (hh * r) - step * 10;
                // console.log('hh2:',hh);
            }
        }

        xx = step * 38 - ww / 2;
        yy = step * 30 - hh / 2;

        ww = ww * 0.8;

        dots.push(Array(xx, yy));
        dots.push(Array(xx + ww, yy));
        dots.push(Array(xx + ww, yy + hh));
        dots.push(Array(xx, yy + hh));


        dots1.push(Array(xx - step, yy));
        dots1.push(Array(xx - step, yy + hh));

        dots2.push(Array(xx, yy + hh + step));
        dots2.push(Array(xx + ww, yy + hh + step));

        drawTetragon(dots, dots1, dots2);


        text.push(Array(rhh + ' cm', [midArr1X, midArr1Y], 1));
        text.push(Array(rww + ' cm', [midArr2X, midArr2Y], 2));

        // text.push(Array('Länge in cm' + ' ' + rww + ' cm', [midArr3X, midArr3Y], 3));

        drawTtext(text);

    }

    if (rindex == 4) {

        ww = get_field('Breite');//parseFloat(jQuery('#pewc_group_29_59').val().replace(',', '.'));
        hh = get_field('Länge');//parseFloat(jQuery('#pewc_group_29_60').val().replace(',', '.'));

        rww = ww;
        rhh = hh;
        // console.log(ww, hh);
        if (ww > hh) {
            // console.log('ok');
            r = ww / hh;
            ww = step * 43;
            hh = step * 43 / r;

        } else {

            r = hh / ww;
            // console.log(r);
            hh = step * 43;
            ww = step * 43 / r;

        }

        // console.log(ww, hh);

        drawEllipse(step * 30, step * 30, ww / 2, hh / 2);


        text.push(Array(rhh + ' cm', [midArr1X, midArr1Y], 1));


        text.push(Array(rww + ' cm', [midArr2X, midArr2Y], 2));
        // text.push(Array(rhh + ' cm3', [midArr3X, midArr3Y], 3));

        drawTtext(text);

    }


    if (rindex == 5) {

        ww = get_field('Durchmesser');
        rw = ww;
        if (ww > mw) ww = mw - step * 10;
        ww = 40 * step;
        hh = ww / 2;


        draw11(ww);


        text.push(Array(rw * 2 + ' cm', [midArr1X, midArr1Y], 1));
        text.push(Array(rw + ' cm', [midArr2X, midArr2Y], 2));
        // text.push(Array(rw / 2 + ' cm', [midArr3X, midArr3Y], 3));
        drawTtext(text);
    }

    if (rindex == 2) {

        ww = get_field('Durchmesser');//parseFloat(jQuery('#pewc_group_29_146').val().replace(',', '.'));
        console.log('Durchmesser is', ww);
        rww = ww;
        if (ww > mw) ww = mw - 20 * step;

        ww = 40 * step;


        draw12(ww);


        xx = mw / 2 - ww / 2;
        yy = xx;
        //console.log(xx-50,yy+ww/2);
        text.push(Array(rww + ' cm', [midArr1X, midArr1Y], 1));
        //text.push(Array(rww + ' cm', [xx - 10*step, 10 + yy + ww / 2]));


        drawTtext(text);

    }

}

window.addEventListener("load", (event) => {
    if (jQuery('#evdev_canvas')) {
        jQuery('body').on('click', '.pewc-field-triggers-condition .pewc-radio-image-wrapper', function (e) {
        }).on('click', '.pewc-field-triggers-condition .pewc-hide-labels .pewc-radio-image-wrapper .pewc-radio-form-field', function (e) {
            draw();
        });
    }
});