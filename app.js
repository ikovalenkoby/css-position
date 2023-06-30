const App = {
  data() {
    return {
      currentLevel: 1,
      maxLevel: 11,
      completedLevels: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      levels: [
        {
          text: [
            'Добро пожаловать в игру Position. В игру, которая поможет вам понять принципы позиционирования в CSS. Рассмотрим 5 типов позиционирования: static, relative, absolute, fixed и sticky.',
            'По умолчанию все элементы обладают статическим позиционированием, свойства top, right, bottom, left (координаты блока) и z-index ( определение по оси Z) не применяются к таким элементам.',
            'Расположим  один цветок. Для этого в html добавим:',
          ],
          textHtml: ['<div class="flower blue"></div>'],
          textAfterHtml: [
            'В css можно добавить для цветка статическое позиционирование, (position: static):',
          ],
          blueAnswer: 'position:static;',
          blueFlower: {
            flower_blue: true,
            flower: true,
          },
          blueSquare: {
            square_blue: true,
          },
        },
        {
          text: [
            'Если элементу задано относительное позиционирование (position: relative;), то его можно сместить относительно его начального положения с помощью значений  свойств  (top, right, bottom, и left).',
            'top: задает смещение по вертикальной оси. Положительное значение элемент смещает вниз, а отрицательное вверх.',
            'bottom: задает смещение по вертикальной оси. Положительное значение элемент смещает вверх, а отрицательное вниз.',
            'left: задает смещение по горизонтальной оси. Положительное значение элемент смещает вправо, а отрицательное влево.',
            'right: задает смещение по горизонтальной оси. Положительное значение смещает влево, а отрицательное вправо.',
            'Необходимо пересадить красный цветок вправо на одну клетку. Код цветка в HTML:',
          ],
          textHtml: ['<div class="flower red"></div>'],
          textAfterHtml: [
            'Для смещения необходимо задать цветку относительное позиционирование (position: relative;), это сделает его подвижным относительно его начального местоположения.',
            'Для смещения вправо необходимо задать расстояние смещения через свойство left. Одна клетка имеет размеры 100 пикселей. Таким образом, необходимо задать координату смещения ( left: 100px;)',
          ],
          redAnswer: 'position:relative;left:100px;',
          redFlower: {
            flower_red: true,
            flower: true,
          },
          redSquare: {
            square_red: true,
          },
        },
        {
          text: [
            'Особое внимание при относительном позиционирование следует обратить на координаты смещения. При относительном позиционирование работает только одна координата горизонтального смещения: left или right, а при вертикальном смещении: top или bottom.',
            'Используя относительное позиционирование ( position: relative) и свойства left  и top, помогите пересадить цветы: синий на одну клетку вправо, красный – на две клетки вправо и одну вверх, а желтый на две клетки вверх.',
            'Размер одного квадрата равен 100*100 пикселей.',
            'Код цветов в HTML:',
          ],
          textHtml: [
            '<div class="flower blue"></div>',
            '<div class="flower red"></div>',
            '<div class="flower yellow"></div>',
          ],
          textAfterHtml: [],
          blueAnswer: `position:relative;left:100px;`,
          blueFlower: {
            flower_blue: true,
            flower: true,
            flower_level4: false,
          },
          blueSquare: {
            square_blue: true,
            square_blue_level3: true,
          },
          redAnswer: 'position:relative;left:200px;top:-100px;',
          redFlower: {
            flower_red: true,
            flower: true,
          },
          redSquare: {
            square_red: true,
            square_red_level3: true,
          },
          yellowAnswer: 'position:relative;top:-200px;',
          yellowFlower: {
            flower_yellow: true,
            flower: true,
            flower_yellow_level3: true,
          },
          yellowSquare: {
            square_yellow: true,
            square_yellow_level3: true,
          },
        },
        {
          text: [
            'В предыдущем примере для пересадки цветов мы использовали относительное позиционирование, задавая его каждому цветку по отдельности. Однако можно упростить код, задав всем цветам относительное позиционирование через класс flower. А потом отдельным цветам назначить нужные координаты перемещения.',
            'Используя относительное позиционирование ( position: relative)  для всех цветов,  свойства bottom и right для каждого, помогите пересадить цветы: синий вправо на две клетки и на две клетки вниз, красные – на одну клетку вправо, а желтый на две клетки вверх и две клетки вправо.',
            'Размер одного квадрата равен 100*100 пикселей.',
            'Код цветов в HTML:',
          ],
          textHtml: [
            '<div class="flower blue"></div>',
            '<div class="flower red"></div>',
            '<div class="flower yellow"></div>',
            '<div class="flower red"></div>',
          ],
          textAfterHtml: [],
          flowerAnswer: 'position:relative;',
          blueAnswer: 'right:-200px;bottom:-200px;',
          blueFlower: {
            flower_blue: true,
            flower_level4: true,
          },
          blueSquare: {
            square_blue: true,
            square_blue_level4: true,
          },
          redAnswer: 'right:-100px;',
          redFlower: {
            flower_red: true,
            flower_level4: true,
          },
          redSquare: {
            square_red: true,
            square_red_level4: true,
          },
          yellowAnswer: 'right:-200px;bottom:200px;',
          yellowFlower: {
            flower_yellow: true,
            flower_level4: true,
            flower_yellow_level4: true,
          },
          yellowSquare: {
            square_yellow: true,
            square_yellow_level4: true,
          },
          red2Answer: true,
          red2Square: {
            square_red2: true,
            square_red: true,
          },
        },
        {
          text: [
            'Элемент с абсолютным позиционирование (position: absolute;) располагается относительно контейнера, которым является ближайший предок с заданным относительным позиционированием (position: relative;), либо относительно окна браузера. Конечная позиция элемента задается значениями свойствами top, right, bottom, left  и отсчитывается от левого верхнего угла блока-родителя с относительным позиционированием либо от верхнего левого угла браузера.',
            'Используя абсолютное позиционирование (position: absolute), помогите добраться бабочке до цветка. Для этого необходимо задать относительное позиционирование предку – field и абсолютное позиционирование – самой бабочке. Чтобы разместить бабочку на цветке необходимо задать координату смещения: top. ',
            '*размер одного квадрата равен 100*100 пикселей',
            'Код цветов в HTML:',
          ],
          textHtml: [
            '<div class="field">',
            ' <div class="flower blue"></div>',
            ' <div class="butterfly blue"></div>',
            '</div>',
          ],
          textAfterHtml: [],
          blueButterflyAnswer: 'position:absolute;top:100px;',
          fieldAnswer: 'position:relative;',
          blueFlower: {
            flower_blue: true,
            flower_blue_level5: true,
          },
          blueButterfly: {
            butterfly: true,
            butterfly_blue: true,
            butterfly_blue_level5: true,
          },
          blueSquare: {
            square_blue: true,
            square_blue_level5: true,
          },
        },
        {
          text: [
            'Используя абсолютное позиционирование ( position: absolute), помогите попасть бабочкам на свои любимые цветы. Используйте свойство top (задание координат от верхнего края поля) и left (задание координат от левого края) для синей бабочки, а свойство bottom ( задание координат от нижнего края поля) и right (задание координат от правого края поля) для желтой бабочки.',
            '*размер одного квадрата равен 100*100 пикселей',
            'Код цветов в HTML:',
          ],
          textHtml: [
            '<div class="field">',
            ' <div class="flower blue"></div>',
            ' <div class="butterfly blue"></div>',
            ' <div class="flower yellow"></div>',
            ' <div class="butterfly yellow"></div>',
            '</div>',
          ],
          textAfterHtml: [],
          blueButterflyAnswer: 'position:absolute;top:100px;left:100px;',
          yellowButterflyAnswer: 'position:absolute;bottom:0;right:0;',
          fieldAnswer: 'position:relative;',
          blueFlower: {
            flower_blue: true,
            flower_blue_level6: true,
          },
          blueButterfly: {
            butterfly: true,
            butterfly_blue: true,
            butterfly_blue_level6: true,
          },
          blueSquare: {
            square_blue: true,
            square_blue_level6: true,
          },
          yellowFlower: {
            flower_yellow: true,
            flower_yellow_level6: true,
          },
          yellowButterfly: {
            butterfly: true,
            butterfly_yellow: true,
            butterfly_yellow_level6: true,
          },
          yellowSquare: {
            square_yellow: true,
            square_yellow_level6: true,
          },
        },
        {
          text: [
            'Разместите бабочки и цветы в указанные клетки. Для цветов установите относительное позиционирование ( position: relative), а для бабочек – абсолютное ( position: absolute). Используйте свойство top (задание координат от верхнего края поля) и left (задание координат от левого края) для синей и красной бабочки и цветка, а свойство bottom ( задание координат от нижнего края поля) и right (задание координат от правого края поля) для желтого цветка и бабочки. Для поля уже установлено относительное позиционирование ( position: relative).',
            '*размер одного квадрата равен 100*100 пикселей',
          ],
          textHtml: [],
          accordion: `Код цветов в HTML:`,
          accordionText: [
            '<div class="field">',
            ' <div class="flower blue"></div>',
            ' <div class="butterfly blue"></div>',
            ' <div class="flower yellow"></div>',
            ' <div class="butterfly yellow"></div>',
            ' <div class="flower red"></div>',
            ' <div class="butterfly red"></div>',
            '</div>',
          ],
          accordionActive: false,
          textAfterHtml: [],
          blueButterflyAnswer: 'position:absolute;top:100px;left:100px;',
          redButterflyAnswer: 'position:absolute;left:300px;top:100px;',
          yellowButterflyAnswer: 'position:absolute;bottom:100px;right:100px;',
          blueAnswer: 'position:relative;top:-100px;left:100px;',
          redAnswer: 'position:relative;left:300px;',
          yellowAnswer: 'position:relative;bottom:100px;right:-200px;',
          blueFlower: {
            flower_blue: true,
            flower_blue_level7: true,
          },
          blueButterfly: {
            butterfly: true,
            butterfly_blue: true,
            butterfly_blue_level7: true,
          },
          blueSquare: {
            square_blue: true,
            square_blue_level7: true,
          },
          redFlower: {
            flower_red: true,
            flower_red_level7: true,
          },
          redButterfly: {
            butterfly: true,
            butterfly_red: true,
            butterfly_red_level7: true,
          },
          redSquare: {
            square_red: true,
            square_red_level7: true,
          },
          yellowFlower: {
            flower_yellow: true,
            flower_yellow_level7: true,
          },
          yellowButterfly: {
            butterfly: true,
            butterfly_yellow: true,
            butterfly_yellow_level7: true,
          },
          yellowSquare: {
            square_yellow: true,
            square_yellow_level7: true,
          },
        },
        {
          text: [
            'У элементов, для которых установлено абсолютное позиционирование, есть интересная особенность: они двигаются в рамках своего блока-контейнера с относительным позиционированием. Если блок-контейнер с относительным позиционированием куда-то передвигается, то элементы, которые в нем содержатся и имеют абсолютное позиционирование, передвигаются вместе с ним.',
            'На поле размещены цветы с бабочками. Необходимо передвинуть  цветы с  бабочками на соответствующие выделенные клетки. Бабочки уже позиционированы абсолютным позиционированием.',
            '*размер одного квадрата равен 100*100 пикселей',
          ],
          textHtml: [],
          accordion: `Код цветов в HTML:`,
          accordionText: [
            '<div class="field">',
            ' <div class="flower blue">',
            '   <div class="butterfly blue"></div>',
            ' </div>',
            ' <div class="flower yellow">',
            '   <div class="butterfly yellow"></div>',
            ' </div>',
            ' <div class="flower red">',
            '   <div class="butterfly red"></div>',
            ' </div>',
            '</div>',
          ],
          accordionActive: false,
          textAfterHtml: [],
          blueAnswer: 'position:relative;left:200px;top:200px;',
          redAnswer: 'position:relative;left:100px;top:-100px;',
          yellowAnswer: 'position:relative;left:300px;top:200px;',
          blueFlower: {
            flower_blue: true,
            flower_blue_level8: true,
          },
          blueButterfly: {
            butterfly: true,
            butterfly_blue: true,
            butterfly_blue_level8: true,
          },
          blueSquare: {
            square_blue: true,
            square_blue_level8: true,
          },
          redFlower: {
            flower_red: true,
            flower_red_level8: true,
          },
          redButterfly: {
            butterfly: true,
            butterfly_red: true,
            butterfly_red_level8: true,
          },
          redSquare: {
            square_red: true,
            square_red_level8: true,
          },
          yellowFlower: {
            flower_yellow: true,
            flower_yellow_level8: true,
          },
          yellowButterfly: {
            butterfly: true,
            butterfly_yellow: true,
            butterfly_yellow_level8: true,
          },
          yellowSquare: {
            square_yellow: true,
            square_yellow_level8: true,
          },
        },
        {
          text: [
            'Если элементу задано относительное позиционирование (position: relative;), то его можно сместить относительно его начального положения с помощью значений  свойств  (top, right, bottom, и left).z-index  - это CSS правило, которое позиционирует элементы относительно оси z, наслаивая их один на другой. То есть элемент, с большим z-index будет находится поверх элемента с меньшим z-index. ',
            'Разместите красную бабочку с помощью абсолютного позиционирования на красном цветке. Цветок необходимо переместить с помощью относительного позиционирования и координаты top. Для того, чтобы бабочка разместилась поверх цветка, необходимо задать ей z-index больший, чем у цветка (по умолчанию z-index равен 0). Полю задано относительное позиционирование.',
            '*размер одного квадрата равен 100*100 пикселей.',
            'Код цветов в HTML:',
          ],
          textHtml: [
            '<div class="field">',
            ' <div class="butterfly red"></div>',
            ' <div class="flower red"></div>',
            '</div>',
          ],
          textAfterHtml: [],
          redAnswer: 'position:relative;top:-100px;',
          redButterflyAnswer: 'position:absolute;',
          redFlower: {
            flower_red: true,
            flower_red_level9: true,
          },
          redSquare: {
            square_red: true,
            square_red_level9: true,
          },
          redButterfly: {
            butterfly: true,
            butterfly_red: true,
            butterfly_red_level9: true,
          },
        },
        {
          text: [
            'В прошлом примере нам пришлось использовать z-index,  потому что в   HTML коде блок с бабочкой расположен перед блоком с цветком, и цветок имеет относительное позиционирование. Часто при создании страниц бывают случаи, когда рядом соседствуют блоки с разными значениями позиционирования и нужно отобразить блоки в заданном порядке. Поэтому важно понимать как работает z-index. ',
            'Разместите бабочек на выделенные клетки с помощью абсолютного позиционирования и координат top и left для жёлтой и синей бабочки, bottom и right  - для красной. Чтобы бабочки не попали в плен, задайте для сачков отрицательный z-index. Полю задано относительное позиционирование.',
            '*размер одного квадрата равен 100*100 пикселей',
          ],
          textHtml: [],
          accordion: `Код цветов в HTML:`,
          accordionText: [
            '<div class="field">',
            ' <div class="butterfly red"></div>',
            ' <div class="butterfly blue"></div>',
            ' <div class="butterfly yellow"></div>',
            ' <div class="net net-for-red"></div>',
            ' <div class="net net-for-blue"></div>',
            ' <div class="net net-for-yellow"></div>',
            '</div>',
          ],
          accordionActive: false,
          textAfterHtml: [],
          blueButterflyAnswer: 'position:absolute;top:200px;left:100px;',
          redButterflyAnswer: 'position:absolute;bottom:0px;right:0px;',
          yellowButterflyAnswer: 'position:absolute;top:0px;left:200px;',
          netAnswer: ' ',
          blueButterfly: {
            butterfly: true,
            butterfly_blue: true,
            butterfly_blue_level10: true,
          },
          blueNet: {
            net: true,
            net_blue: true,
            net_blue_level10: true,
          },
          blueSquare: {
            square_blue: true,
            square_blue_level10: true,
          },
          redButterfly: {
            butterfly: true,
            butterfly_red: true,
            butterfly_red_level10: true,
          },
          redNet: {
            net: true,
            net_red: true,
            net_red_level10: true,
          },
          redSquare: {
            square_red: true,
            square_red_level10: true,
          },
          yellowButterfly: {
            butterfly: true,
            butterfly_yellow: true,
            butterfly_yellow_level10: true,
          },
          yellowNet: {
            net: true,
            net_yellow: true,
            net_yellow_level10: true,
          },
          yellowSquare: {
            square_yellow: true,
            square_yellow_level10: true,
          },
        },
        {
          text: [
            'Кроме относительного и абсолютного есть ещё два типа размещения элементов  на экране. Они очень похожи, однако есть и существенные различия. Это фиксированное и «липкое» позиционирование. ',
            'Фиксированное позиционирование ( position: fixed;) похоже на абсолютное за исключением того, что элемент изменяет положение относительно окна просмотра браузера (элемента body, если точнее), а не другого элемента. Это полезно при создании меню навигации, которое всегда остаётся в одном и том же месте на экране, в то время как другой контент прокручивается.',
            'Выпустите желтую бабочку полетать по всему экрану. Для этого задайте ей фиксированное позиционирование и координаты top: 0px; и left: 20px; ',
            'Если полоса прокрутки у вас не появилась, уменьшите ширину браузера. Поэкспериментируйте с шириной, чтоб увидеть как ведёт себя бабочка по отношению к другому контенту.',
            'Код цветов в HTML:',
          ],
          textHtml: [
            '<div class="field">',
            ' <div class="butterfly-yellow"></div>',
            '</div>',
          ],
          textAfterHtml: [],
          yellowButterflyAnswer: 'position:fixed;top:0px;left:20px;',
          yellowButterfly: {
            butterfly: true,
            butterfly_yellow: true,
            butterfly_yellow_level11: true,
          },
        },
      ],
      answers: [
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          blueButterflyAnswer: '',
          redButterflyAnswer: '',
          yellowButterflyAnswer: '',
          flowerAnswer: '',
          fieldAnswer: '',
          netAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          blueButterflyAnswer: '',
          redButterflyAnswer: '',
          yellowButterflyAnswer: '',
          flowerAnswer: '',
          fieldAnswer: '',
          netAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          blueButterflyAnswer: '',
          redButterflyAnswer: '',
          yellowButterflyAnswer: '',
          flowerAnswer: '',
          fieldAnswer: '',
          netAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          blueButterflyAnswer: '',
          redButterflyAnswer: '',
          yellowButterflyAnswer: '',
          flowerAnswer: '',
          fieldAnswer: '',
          netAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          blueButterflyAnswer: '',
          redButterflyAnswer: '',
          yellowButterflyAnswer: '',
          flowerAnswer: '',
          fieldAnswer: '',
          netAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          blueButterflyAnswer: '',
          redButterflyAnswer: '',
          yellowButterflyAnswer: '',
          flowerAnswer: '',
          fieldAnswer: '',
          netAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          blueButterflyAnswer: '',
          redButterflyAnswer: '',
          yellowButterflyAnswer: '',
          flowerAnswer: '',
          fieldAnswer: '',
          netAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          blueButterflyAnswer: '',
          redButterflyAnswer: '',
          yellowButterflyAnswer: '',
          flowerAnswer: '',
          fieldAnswer: '',
          netAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          blueButterflyAnswer: '',
          redButterflyAnswer: '',
          yellowButterflyAnswer: '',
          flowerAnswer: '',
          fieldAnswer: '',
          netAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          blueButterflyAnswer: '',
          redButterflyAnswer: '',
          yellowButterflyAnswer: '',
          flowerAnswer: '',
          fieldAnswer: '',
          netAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          blueButterflyAnswer: '',
          redButterflyAnswer: '',
          yellowButterflyAnswer: '',
          flowerAnswer: '',
          fieldAnswer: '',
          netAnswer: '',
        },
      ],
      blueStyle: '',
      redStyle: '',
      yellowStyle: '',
      blueButterflyStyle: '',
      redButterflyStyle: '',
      yellowButterflyStyle: '',
      netStyle: '',
      yellowNetStyle: '',
      blueNetStyle: '',
      redNetStyle: '',
      playerBlueAnswer: '',
      playerRedAnswer: '',
      playerFlowerAnswer: '',
      playerYellowAnswer: '',
      playerFieldAnswer: '',
      playerBlueButterflyAnswer: '',
      playerRedButterflyAnswer: '',
      playerYellowButterflyAnswer: '',
      playerNetAnswer: '',
      netCorrect: '',
      form: {
        form: true,
        form_shake: false,
      },
      dropdown: false,
      width: 0,
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
    if (localStorage.currentLevel) {
      this.currentLevel = localStorage.currentLevel;
    }
    this.getCompletedLevels();
    this.getAnswers();
    this.setPlayerAnswers(this.currentLevel);
  },
  watch: {
    playerBlueAnswer(newPlayerBlueAnswer) {
      this.blueStyle = newPlayerBlueAnswer;
      let coords = this.getCoordinates(newPlayerBlueAnswer);
      let top = coords.top;
      let bottom = coords.bottom;
      let right = coords.right;
      let left = coords.left;
      if (this.width > 480) {
        if (this.currentLevel == 7) {
          this.blueStyle = `top:calc(200px + ${top}); left:${left};`;
        } else if (this.currentLevel == 8) {
          this.blueButterflyStyle = `top:${top}; left:${left};`;
        }
      } else {
        if (this.currentLevel != 4 && this.currentLevel != 7) {
          this.blueStyle = `top:calc(${top} * 0.75); left:calc(${left} * 0.75);`;
        } else if (this.currentLevel == 4) {
          this.blueStyle = `bottom:calc(${bottom} * 0.75); right:calc(${right} * 0.75);`;
        } else if (this.currentLevel == 7) {
          this.blueStyle = `top:calc(150px + calc(${top} * 0.75)); left:calc(${left} * 0.75);`;
        }
        if (this.currentLevel == 8) {
          this.blueButterflyStyle = `top:calc(${top} * 0.75); left:calc(${left} * 0.75);`;
        }
      }
    },
    playerRedAnswer(newPlayerRedAnswer) {
      this.redStyle = newPlayerRedAnswer;
      let coords = this.getCoordinates(newPlayerRedAnswer);
      let top = coords.top;
      let bottom = coords.bottom;
      let right = coords.right;
      let left = coords.left;
      if (this.width > 480) {
        if (this.currentLevel == 8) {
          this.redStyle = `top:calc(100px + ${top}); left:${left};`;
          this.redButterflyStyle = `top:calc(200px + ${top}); left:${left};`;
        } else if (this.currentLevel == 9) {
          this.redStyle = `top:calc(100px + ${top}); left:${left};`;
        }
      } else {
        if (this.currentLevel != 4 && this.currentLevel < 8) {
          this.redStyle = `top:calc(${top} * 0.75); left:calc(${left} * 0.75);`;
        } else if (this.currentLevel == 4) {
          this.redStyle = `bottom:calc(${bottom} * 0.75); right:calc(${right} * 0.75);`;
        } else if (this.currentLevel == 8) {
          this.redStyle = `top:calc(75px + calc(${top} * 0.75)); left:calc(${left} * 0.75);`;
          this.redButterflyStyle = `top:calc(150px + calc(${top} * 0.75)); left:calc(${left} * 0.75);`;
        } else if (this.currentLevel == 9) {
          this.redStyle = `top:calc(75px + calc(${top} * 0.75)); left:calc(${left} * 0.75);`;
        }
      }
    },
    playerYellowAnswer(newPlayerYellowAnswer) {
      this.yellowStyle = newPlayerYellowAnswer;
      if (this.currentLevel == 8) {
        this.playerYellowButterflyAnswer = newPlayerYellowAnswer;
      }
      let coords = this.getCoordinates(newPlayerYellowAnswer);
      let top = coords.top;
      let bottom = coords.bottom;
      let right = coords.right;
      let left = coords.left;
      if (this.width > 480) {
        if (this.currentLevel == 7) {
          this.yellowStyle = `bottom:calc(-100px + ${bottom}); right: ${right};`;
        }
        if (this.currentLevel == 8) {
          this.yellowStyle = `top:calc(-100px + ${top}); left:${left};`;
        }
      } else {
        if (
          this.currentLevel != 4 &&
          this.currentLevel != 7 &&
          this.currentLevel != 8
        ) {
          this.yellowStyle = `top:calc(${top} * 0.75); left:calc(${left} * 0.75);`;
        } else if (this.currentLevel == 4) {
          this.yellowStyle = `bottom:calc(${bottom} * 0.75); right:calc(${right} * 0.75);`;
        } else if (this.currentLevel == 7) {
          this.yellowStyle = `bottom:calc(-75px + calc(${bottom} * 0.75)); right:calc(${right} * 0.75);`;
        } else if (this.currentLevel == 8) {
          this.yellowStyle = `top:calc(-75px + calc(${top} * 0.75)); left:calc(${left} * 0.75);`;
        }
      }
    },
    playerYellowButterflyAnswer(newPlayerYellowButterflyAnswer) {
      this.yellowButterflyStyle = newPlayerYellowButterflyAnswer;
      let coords = this.getCoordinates(newPlayerYellowButterflyAnswer);
      let top = coords.top;
      let bottom = coords.bottom;
      let right = coords.right;
      let left = coords.left;
      if (this.width < 481) {
        if (bottom == '0' && right == '0') {
          this.yellowButterflyStyle = newPlayerYellowButterflyAnswer;
        } else {
          this.yellowButterflyStyle = `bottom:calc(${bottom} * 0.75); right:calc(${right} * 0.75);`;
        }
        if (this.currentLevel == 8) {
          this.yellowButterflyStyle = `top:calc(75px + calc(${top} * 0.75)); left:calc(${left} * 0.75);`;
        }
        if (this.currentLevel == 10) {
          this.yellowButterflyStyle = this.yellowButterflyStyle
            .replaceAll(' ', '')
            .replaceAll(`top:${top}`, `top:calc(${top} * 0.75)`)
            .replaceAll(`left:${left}`, `left:calc(${left} * 0.75)`);
        }
      } else {
        if (this.currentLevel == 8) {
          this.yellowButterflyStyle = `top:calc(100px + ${top}); left:${left};`;
        }
      }
    },
    playerRedButterflyAnswer(newPlayerRedButterflyAnswer) {
      this.redButterflyStyle = newPlayerRedButterflyAnswer;
      let coords = this.getCoordinates(newPlayerRedButterflyAnswer);
      let top = coords.top;
      let bottom = coords.bottom;
      let right = coords.right;
      let left = coords.left;
      if (this.width < 481) {
        if (this.currentLevel != 10) {
          this.redButterflyStyle = this.redButterflyStyle
            .replaceAll(' ', '')
            .replaceAll(`top:${top}`, `top:calc(${top} * 0.75)`)
            .replaceAll(`left:${left}`, `left:calc(${left} * 0.75)`);
        }
      }
    },
    playerBlueButterflyAnswer(newPlayerBlueButterflyAnswer) {
      this.blueButterflyStyle = newPlayerBlueButterflyAnswer;
      let coords = this.getCoordinates(newPlayerBlueButterflyAnswer);
      let top = coords.top;
      let bottom = coords.bottom;
      let right = coords.right;
      let left = coords.left;
      if (this.width < 481) {
        this.blueButterflyStyle = `top:calc(${top} * 0.75); left:calc(${left} * 0.75);`;
      }
    },
    playerNetAnswer(newPlayernetAnswer) {
      let netAnswer = newPlayernetAnswer
        .replaceAll('\n', '')
        .replaceAll(' ', '');
      if (this.getZIndex(netAnswer).zIndex < 0) {
        this.blueNetStyle = 'z-index:0;';
        this.redNetStyle = 'z-index:0;';
        this.yellowNetStyle = 'z-index:0;';
      }else{
        this.blueNetStyle = newPlayernetAnswer;
        this.redNetStyle = newPlayernetAnswer;
        this.yellowNetStyle = newPlayernetAnswer;
      }
    },
    currentLevel(newCurrentLevel) {
      if (newCurrentLevel > 0 && newCurrentLevel < this.maxLevel + 1) {
        localStorage.currentLevel = newCurrentLevel;
      }
    },
    completedLevels: {
      handler(newcompletedLevels) {
        localStorage.setItem(
          'completedLevels',
          JSON.stringify(newcompletedLevels)
        );
      },
      deep: true,
    },
    answers: {
      handler(newAnswers) {
        localStorage.setItem('answers', JSON.stringify(newAnswers));
      },
      deep: true,
    },
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    getCompletedLevels() {
      const completedLevels = localStorage.getItem('completedLevels');
      if (completedLevels) {
        this.completedLevels = JSON.parse(completedLevels);
      }
    },
    getAnswers() {
      const answers = localStorage.getItem('answers');
      if (answers) {
        this.answers = JSON.parse(answers);
      }
    },
    setPlayerAnswers(level) {
      this.playerYellowAnswer = this.answers[level - 1].yellowAnswer;
      this.playerBlueAnswer = this.answers[level - 1].blueAnswer;
      this.playerRedAnswer = this.answers[level - 1].redAnswer;
      this.playerFlowerAnswer = this.answers[level - 1].flowerAnswer;
      this.playerBlueButterflyAnswer =
        this.answers[level - 1].blueButterflyAnswer;
      this.playerRedButterflyAnswer =
        this.answers[level - 1].redButterflyAnswer;
      this.playerYellowButterflyAnswer =
        this.answers[level - 1].yellowButterflyAnswer;
      this.playerFieldAnswer = this.answers[level - 1].fieldAnswer;
      this.playerNetAnswer = this.answers[level - 1].netAnswer;
    },
    setAnswers() {
      this.answers[this.currentLevel - 1].blueAnswer = this.playerBlueAnswer;
      this.answers[this.currentLevel - 1].redAnswer = this.playerRedAnswer;
      this.answers[this.currentLevel - 1].yellowAnswer =
        this.playerYellowAnswer;
      this.answers[this.currentLevel - 1].flowerAnswer =
        this.playerFlowerAnswer;
      this.answers[this.currentLevel - 1].blueButterflyAnswer =
        this.playerBlueButterflyAnswer;
      this.answers[this.currentLevel - 1].redButterflyAnswer =
        this.playerRedButterflyAnswer;
      this.answers[this.currentLevel - 1].yellowButterflyAnswer =
        this.playerYellowButterflyAnswer;
      this.answers[this.currentLevel - 1].fieldAnswer = this.playerFieldAnswer;
      this.answers[this.currentLevel - 1].netAnswer = this.playerNetAnswer;
    },
    getCoordinates(answer) {
      let words = answer
        .replaceAll(':', '')
        .replaceAll(' ', '')
        .replaceAll('\n', '')
        .split(';');
      let top = '0';
      let bottom = '0';
      let right = '0';
      let left = '0';
      words.forEach((el) => {
        if (el.includes('top')) {
          top = el.replace('top', '');
        } else if (el.includes('bottom')) {
          bottom = el.replace('bottom', '');
        } else if (el.includes('left')) {
          left = el.replace('left', '');
        } else if (el.includes('right')) {
          right = el.replace('right', '');
        }
      });
      return { top, left, bottom, right };
    },
    clearStyles() {
      this.yellowStyle = '';
      this.yellowButterflyStyle = '';
      this.redStyle = '';
      this.redButterflyStyle = '';
    },
    setCurrentLevel(level) {
      if (this.currentLevel != level) {
        this.clearStyles();
        this.setPlayerAnswers(level);
        this.currentLevel = level;
      }
    },
    nextLevel() {
      let nextLevel = +this.currentLevel + 1;
      if (nextLevel > this.maxLevel) {
        nextLevel = 1;
      }
      this.setCurrentLevel(nextLevel);
    },
    prevLevel() {
      let prevLevel = +this.currentLevel - 1;
      if (prevLevel < 1) {
        prevLevel = 1;
      }
      this.setCurrentLevel(prevLevel);
    },
    reset() {
      if (confirm('Сбросить прогресс?')) {
        this.completedLevels = [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ];
        this.answers = [
          {
            blueAnswer: '',
            redAnswer: '',
            yellowAnswer: '',
            blueButterflyAnswer: '',
            redButterflyAnswer: '',
            yellowButterflyAnswer: '',
            flowerAnswer: '',
            fieldAnswer: '',
            netAnswer: '',
          },
          {
            blueAnswer: '',
            redAnswer: '',
            yellowAnswer: '',
            blueButterflyAnswer: '',
            redButterflyAnswer: '',
            yellowButterflyAnswer: '',
            flowerAnswer: '',
            fieldAnswer: '',
            netAnswer: '',
          },
          {
            blueAnswer: '',
            redAnswer: '',
            yellowAnswer: '',
            blueButterflyAnswer: '',
            redButterflyAnswer: '',
            yellowButterflyAnswer: '',
            flowerAnswer: '',
            fieldAnswer: '',
            netAnswer: '',
          },
          {
            blueAnswer: '',
            redAnswer: '',
            yellowAnswer: '',
            blueButterflyAnswer: '',
            redButterflyAnswer: '',
            yellowButterflyAnswer: '',
            flowerAnswer: '',
            fieldAnswer: '',
            netAnswer: '',
          },
          {
            blueAnswer: '',
            redAnswer: '',
            yellowAnswer: '',
            blueButterflyAnswer: '',
            redButterflyAnswer: '',
            yellowButterflyAnswer: '',
            flowerAnswer: '',
            fieldAnswer: '',
            netAnswer: '',
          },
          {
            blueAnswer: '',
            redAnswer: '',
            yellowAnswer: '',
            blueButterflyAnswer: '',
            redButterflyAnswer: '',
            yellowButterflyAnswer: '',
            flowerAnswer: '',
            fieldAnswer: '',
            netAnswer: '',
          },
          {
            blueAnswer: '',
            redAnswer: '',
            yellowAnswer: '',
            blueButterflyAnswer: '',
            redButterflyAnswer: '',
            yellowButterflyAnswer: '',
            flowerAnswer: '',
            fieldAnswer: '',
            netAnswer: '',
          },
          {
            blueAnswer: '',
            redAnswer: '',
            yellowAnswer: '',
            blueButterflyAnswer: '',
            redButterflyAnswer: '',
            yellowButterflyAnswer: '',
            flowerAnswer: '',
            fieldAnswer: '',
            netAnswer: '',
          },
          {
            blueAnswer: '',
            redAnswer: '',
            yellowAnswer: '',
            blueButterflyAnswer: '',
            redButterflyAnswer: '',
            yellowButterflyAnswer: '',
            flowerAnswer: '',
            fieldAnswer: '',
            netAnswer: '',
          },
          {
            blueAnswer: '',
            redAnswer: '',
            yellowAnswer: '',
            blueButterflyAnswer: '',
            redButterflyAnswer: '',
            yellowButterflyAnswer: '',
            flowerAnswer: '',
            fieldAnswer: '',
            netAnswer: '',
          },
          {
            blueAnswer: '',
            redAnswer: '',
            yellowAnswer: '',
            blueButterflyAnswer: '',
            redButterflyAnswer: '',
            yellowButterflyAnswer: '',
            flowerAnswer: '',
            fieldAnswer: '',
            netAnswer: '',
          },
        ];
        this.playerBlueAnswer = '';
        this.playerRedAnswer = '';
        this.playerYellowAnswer = '';
        this.playerFlowerAnswer = '';
        this.playerFieldAnswer = '';
        this.playerBlueButterflyAnswer = '';
        this.playerRedButterflyAnswer = '';
        this.playerYellowButterflyAnswer = '';
      }
    },
    completeLevel() {
      let completed = 0;
      let nextLevel = +this.currentLevel + 1;
      this.completedLevels[this.currentLevel - 1] = true;
      this.setAnswers();
      if (this.completedLevels[nextLevel - 1]) {
        this.completedLevels.every((el, index) => {
          if (el == true) {
            ++completed;
            return true;
          } else {
            nextLevel = index + 1;
            return false;
          }
        });
      }
      if (completed == this.maxLevel) {
        alert('Игра пройдена');
      }
      if (nextLevel > this.maxLevel) {
        nextLevel = 1;
      }
      this.setCurrentLevel(nextLevel);
    },
    showError() {
      this.form.form_shake = true;
      setTimeout(() => {
        this.form.form_shake = false;
      }, '1000');
    },
    getZIndex(from) {
      let zIndex;
      let index = from.indexOf('z-index:');
      zIndex = from.slice(index + 8, from.length - 1);
      return { zIndex, index };
    },
    onSubmit() {
      let next = false;
      let flowerAnswer = this.playerFlowerAnswer
        .replaceAll('\n', '')
        .replaceAll(' ', '');
      let blueAnswer = this.playerBlueAnswer
        .replaceAll('\n', '')
        .replaceAll(' ', '');
      let redAnswer = this.playerRedAnswer
        .replaceAll('\n', '')
        .replaceAll(' ', '');
      let yellowAnswer = this.playerYellowAnswer
        .replaceAll('\n', '')
        .replaceAll(' ', '');
      let fieldAnswer = this.playerFieldAnswer
        .replaceAll('\n', '')
        .replaceAll(' ', '');
      let blueButterflyAnswer = this.playerBlueButterflyAnswer
        .replaceAll('\n', '')
        .replaceAll(' ', '');
      let yellowButterflyAnswer = this.playerYellowButterflyAnswer
        .replaceAll('\n', '')
        .replaceAll(' ', '');
      let redButterflyAnswer = this.playerRedButterflyAnswer
        .replaceAll('\n', '')
        .replaceAll(' ', '');
      let netAnswer = this.playerNetAnswer
        .replaceAll('\n', '')
        .replaceAll(' ', '');
      let zIndex;
      if (this.currentLevel == 9) {
        zIndex = this.getZIndex(redButterflyAnswer);
        redButterflyAnswer = redButterflyAnswer.replace(
          redButterflyAnswer.slice(zIndex.index, redButterflyAnswer.length),
          ''
        );
        if (+zIndex.zIndex > 0) {
          next = true;
        } else {
          next = false;
          this.showError();
          return false;
        }
      }
      if (this.currentLevel == 10) {
        zIndex = this.getZIndex(netAnswer);
        if (+zIndex.zIndex < 0) {
          next = true;
        } else {
          next = false;
          this.showError();
          return false;
        }
      }
      if (
        this.levels[this.currentLevel - 1].fieldAnswer &&
        this.levels[this.currentLevel - 1].fieldAnswer === fieldAnswer
      ) {
        next = true;
      } else if (
        this.levels[this.currentLevel - 1].fieldAnswer &&
        this.levels[this.currentLevel - 1].fieldAnswer !== fieldAnswer
      ) {
        next = false;
        this.showError();
        return false;
      }
      if (
        this.levels[this.currentLevel - 1].blueButterflyAnswer &&
        this.levels[this.currentLevel - 1].blueButterflyAnswer ===
          blueButterflyAnswer
      ) {
        next = true;
      } else if (
        this.levels[this.currentLevel - 1].blueButterflyAnswer &&
        this.levels[this.currentLevel - 1].blueButterflyAnswer !==
          blueButterflyAnswer
      ) {
        next = false;
        this.showError();
        return false;
      }
      if (
        this.levels[this.currentLevel - 1].redButterflyAnswer &&
        this.levels[this.currentLevel - 1].redButterflyAnswer ===
          redButterflyAnswer
      ) {
        next = true;
      } else if (
        this.levels[this.currentLevel - 1].redButterflyAnswer &&
        this.levels[this.currentLevel - 1].redButterflyAnswer !==
          redButterflyAnswer
      ) {
        next = false;
        this.showError();
        return false;
      }
      if (
        this.levels[this.currentLevel - 1].yellowButterflyAnswer &&
        this.levels[this.currentLevel - 1].yellowButterflyAnswer ===
          yellowButterflyAnswer
      ) {
        next = true;
      } else if (
        this.levels[this.currentLevel - 1].yellowButterflyAnswer &&
        this.levels[this.currentLevel - 1].yellowButterflyAnswer !==
          yellowButterflyAnswer
      ) {
        next = false;
        this.showError();
        return false;
      }
      if (
        this.levels[this.currentLevel - 1].flowerAnswer &&
        this.levels[this.currentLevel - 1].flowerAnswer === flowerAnswer
      ) {
        next = true;
      } else if (
        this.levels[this.currentLevel - 1].flowerAnswer &&
        this.levels[this.currentLevel - 1].flowerAnswer !== flowerAnswer
      ) {
        next = false;
        this.showError();
        return false;
      }
      if (
        this.levels[this.currentLevel - 1].blueAnswer &&
        this.levels[this.currentLevel - 1].blueAnswer === blueAnswer
      ) {
        next = true;
      } else if (
        this.levels[this.currentLevel - 1].blueAnswer &&
        this.levels[this.currentLevel - 1].blueAnswer !== blueAnswer
      ) {
        next = false;
        this.showError();
        return false;
      }
      if (
        this.levels[this.currentLevel - 1].redAnswer &&
        this.levels[this.currentLevel - 1].redAnswer === redAnswer
      ) {
        next = true;
      } else if (
        this.levels[this.currentLevel - 1].redAnswer &&
        this.levels[this.currentLevel - 1].redAnswer !== redAnswer
      ) {
        next = false;
        this.showError();
        return false;
      }
      if (
        this.levels[this.currentLevel - 1].yellowAnswer &&
        this.levels[this.currentLevel - 1].yellowAnswer === yellowAnswer
      ) {
        next = true;
      } else if (
        this.levels[this.currentLevel - 1].yellowAnswer &&
        this.levels[this.currentLevel - 1].yellowAnswer !== yellowAnswer
      ) {
        next = false;
        this.showError();
        return false;
      }
      if (next) {
        this.completeLevel();
      } else {
        this.showError();
      }
    },
  },
};
Vue.createApp(App).mount('#app');
