const rightTopVertical = document.querySelector('#right-top-vertical'),
      rightTopHorisontal = document.querySelector('#right-top-horisontal'),

      rightBottomVertical = document.querySelector('#right-bottom-vertical'),
      leftBottomHorisontal = document.querySelector('#bottom-left-horisontal'),
      leftTopVertical = document.querySelector('#left-top-vertical'),

      rightBottomHorisontal = document.querySelector('#right-bottom-horisontal'),
      leftBottomVertical = document.querySelector('#bottom-left-vertical'),
      leftTopHorisontal = document.querySelector('#left-top-horisontal'),
      box = document.querySelector('.radius');
    // console.log(rightRadius)
    box.style.borderRadius = `${rightTopVertical.value}%${rightBottomVertical.value}%${leftBottomHorisontal.value}%${leftTopVertical.value}%/${rightTopHorisontal.value}%${rightBottomHorisontal.value}%${leftBottomVertical.value}%${leftTopHorisontal.value}%`

      function changeValue(selector, styleValue, e) {
        switch (styleValue) {
            case 'borderTopLeftRadius':
                selector.style[styleValue] = `${leftTopVertical.value}% ${leftTopHorisontal.value}%`;
                break;
            case 'borderTopRightRadius':
                selector.style[styleValue] = `${rightTopVertical.value}% ${rightTopHorisontal.value}%`;
                break;
            case 'borderBottomRightRadius':
                selector.style[styleValue] = `${rightBottomVertical.value}% ${rightBottomHorisontal.value}%`;
                break;
            case 'borderBottomLeftRadius':
                selector.style[styleValue] = `${leftBottomHorisontal.value}% ${leftBottomVertical.value}%`;
                break;
        }
        console.log( box.style.borderRadius )
    }

    rightTopVertical.addEventListener('input', (e) => changeValue(box, 'borderTopRightRadius', e));
    rightTopHorisontal.addEventListener('input', (e) => changeValue(box, 'borderTopRightRadius', e));

    rightBottomVertical.addEventListener('input', (e) => changeValue(box, 'borderBottomRightRadius', e));
    rightBottomHorisontal.addEventListener('input', (e) => changeValue(box, 'borderBottomRightRadius', e));

    leftBottomHorisontal.addEventListener('input', (e) => changeValue(box, 'borderBottomLeftRadius', e));
    leftBottomVertical.addEventListener('input', (e) => changeValue(box, 'borderBottomLeftRadius', e));

    leftTopVertical.addEventListener('input', (e) => changeValue(box, 'borderTopLeftRadius', e));
    leftTopHorisontal.addEventListener('input', (e) => changeValue(box, 'borderTopLeftRadius', e));


