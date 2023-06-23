const App = {
  data() {
    return {
      currentLevel: 1,
      maxLevel: 7,
      completedLevels: [false, false, false, false, false, false, false],
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
            flower_yellow_level4:true
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
            '<div class="flower blue"></div>',
            '<div class="butterfly blue"></div>',
            '</div>',
          ],
          textAfterHtml: [],
          blueButterflyAnswer: 'position:absolute;top:100px;',
          fieldAnswer: 'position:relative;',
          blueFlower: {
            flower_blue: true,
            flower: true,
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
            '<div class="flower blue"></div>',
            '<div class="butterfly blue"></div>',
            '<div class="flower yellow"></div>',
            '<div class="butterfly yellow"></div>',
            '</div>',
          ],
          textAfterHtml: [],
          blueButterflyAnswer: 'position:absolute;top:100px;left:100px;',
          yellowButterflyAnswer: 'position:absolute;bottom:0;right:0;',
          fieldAnswer: 'position:relative;',
          blueFlower: {
            flower_blue: true,
            flower: true,
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
            flower: true,
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
            '<div class="flower blue"></div>',
            '<div class="butterfly blue"></div>',
            '<div class="flower yellow"></div>',
            '<div class="butterfly yellow"></div>',
            '<div class="flower red"></div>',
            '<div class="butterfly red"></div>',
            '</div>',
          ],
          accordionActive:false,
          textAfterHtml: [],
          blueButterflyAnswer: 'position:absolute;top:100px;left:100px;',
          redButterflyAnswer: 'position:absolute;left:300px;top:100px;',
          yellowButterflyAnswer: 'position:absolute;bottom:100px;right:100px;',
          blueAnswer: 'position:relative;top:-100px;left:100px;',
          redAnswer: 'position:relative;left:300px;',
          yellowAnswer: 'position:relative;bottom:100px;right:-200px;',
          blueFlower: {
            flower_blue: true,
            flower: true,
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
            flower: true,
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
        },
      ],
      blueStyle: '',
      redStyle: '',
      yellowStyle: '',
      blueButterflyStyle: '',
      redButterflyStyle: '',
      yellowButterflyStyle: '',
      playerBlueAnswer: '',
      playerRedAnswer: '',
      playerFlowerAnswer: '',
      playerYellowAnswer: '',
      playerFieldAnswer: '',
      playerBlueButterflyAnswer: '',
      playerRedButterflyAnswer: '',
      playerYellowButterflyAnswer: '',
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
    this.playerBlueAnswer = this.answers[this.currentLevel - 1].blueAnswer;
    this.playerRedAnswer = this.answers[this.currentLevel - 1].redAnswer;
    this.playerYellowAnswer = this.answers[this.currentLevel - 1].yellowAnswer;
    this.playerFlowerAnswer = this.answers[this.currentLevel - 1].flowerAnswer;
    this.playerBlueButterflyAnswer =
      this.answers[this.currentLevel - 1].blueButterflyAnswer;
    this.playerRedButterflyAnswer =
      this.answers[this.currentLevel - 1].redButterflyAnswer;
    this.playerYellowButterflyAnswer =
      this.answers[this.currentLevel - 1].yellowButterflyAnswer;
    this.playerFieldAnswer = this.answers[this.currentLevel - 1].fieldAnswer;
  },
  watch: {
    playerBlueAnswer(newPlayerBlueAnswer) {
      if (
        newPlayerBlueAnswer.includes('relative') ||
        this.playerFlowerAnswer.includes('relative')
      ) {
        let words = newPlayerBlueAnswer.split(';');
        let top = '0';
        let bottom = '0';
        let right = '0';
        let left = '0';
        words.forEach((el) => {
          if (el.includes('top')) {
            top = el.replace('top', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('bottom')) {
            bottom = el
              .replace('bottom', '')
              .replace(':', '')
              .replaceAll(' ', '');
          } else if (el.includes('left')) {
            left = el.replace('left', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('right')) {
            right = el
              .replace('right', '')
              .replace(':', '')
              .replaceAll(' ', '');
          }
          if (this.width > 480) {
            if (this.currentLevel >= 1 && this.currentLevel <= 3) {
              this.blueStyle = `top:calc(-400px + ${top}); left:calc(12px + ${left});`;
            } else if (this.currentLevel == 4) {
              this.blueStyle = `bottom:calc(400px + ${bottom}); right:calc(-12px + ${right});`;
            } else if (this.currentLevel == 7) {
              this.blueStyle = `top:calc(-200px + ${top}); left:calc(12px + ${left});`;
            }
          } else {
            if (this.currentLevel >= 1 && this.currentLevel <= 3) {
              this.blueStyle = `top:calc(-300px + calc(${top} * 0.75)); left:calc(9px + calc(${left} * 0.75));`;
            } else if (this.currentLevel == 4) {
              this.blueStyle = `bottom:calc(300px + calc(${bottom} * 0.75)); right:calc(-9px + calc(${right} * 0.75));`;
            } else if (this.currentLevel == 7) {
              this.blueStyle = `top:calc(-150px + calc(${top} * 0.75)); left:calc(9px + calc(${left} * 0.75));`;
            }
          }
        });
      } else {
        this.blueStyle = '';
      }
    },
    playerRedAnswer(newPlayerRedAnswer) {
      if (
        newPlayerRedAnswer.includes('relative') ||
        this.playerFlowerAnswer.includes('relative')
      ) {
        let words = newPlayerRedAnswer.split(';');
        let top = '0';
        let bottom = '0';
        let right = '0';
        let left = '0';
        words.forEach((el) => {
          if (el.includes('top')) {
            top = el.replace('top', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('bottom')) {
            bottom = el
              .replace('bottom', '')
              .replace(':', '')
              .replaceAll(' ', '');
          } else if (el.includes('left')) {
            left = el.replace('left', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('right')) {
            right = el
              .replace('right', '')
              .replace(':', '')
              .replaceAll(' ', '');
          }
          if (this.width > 480) {
            if (this.currentLevel >= 1 && this.currentLevel <= 3) {
              this.redStyle = `top:calc(-400px + ${top}); left:calc(12px + ${left});`;
            } else if(this.currentLevel == 4) {
              this.redStyle = `bottom:calc(400px + ${bottom}); right:calc(-12px + ${right});`;
            } else if (this.currentLevel == 7) {
              this.redStyle = `top:calc(-400px + ${top}); left:calc(12px + ${left});`;
            }
          } else {
            if (this.currentLevel >= 1 && this.currentLevel <= 3) {
              this.redStyle = `top:calc(-300px + calc(${top} * 0.75)); left:calc(9px + calc(${left} * 0.75));`;
            } else if(this.currentLevel == 4) {
              this.redStyle = `bottom:calc(300px + calc(${bottom} * 0.75)); right:calc(-9px + calc(${right} * 0.75));`;
            }else if (this.currentLevel == 7) {
              this.redStyle = `top:calc(-300px + calc(${top} * 0.75)); left:calc(9px + calc(${left} * 0.75));`;
            }
          }
        });
      } else {
        this.redStyle = '';
      }
    },
    playerYellowAnswer(newPlayerYellowAnswer) {
      if (
        newPlayerYellowAnswer.includes('relative') ||
        this.playerFlowerAnswer.includes('relative')
      ) {
        let words = newPlayerYellowAnswer.split(';');
        let top = '0';
        let bottom = '0';
        let right = '0';
        let left = '0';
        words.forEach((el) => {
          if (el.includes('top')) {
            top = el.replace('top', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('bottom')) {
            bottom = el
              .replace('bottom', '')
              .replace(':', '')
              .replaceAll(' ', '');
          } else if (el.includes('left')) {
            left = el.replace('left', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('right')) {
            right = el
              .replace('right', '')
              .replace(':', '')
              .replaceAll(' ', '');
          }
          if (this.width > 480) {
            if (this.currentLevel >= 1 && this.currentLevel <= 3) {
              this.yellowStyle = `top:calc(-400px + ${top}); left:calc(12px + ${left});`;
            } else  if(this.currentLevel == 4){
              this.yellowStyle = `bottom:calc(400px + ${bottom}); right:calc(-12px + ${right});`;
            } else if (this.currentLevel == 7) {
              this.yellowStyle = `bottom:calc(300px + ${bottom}); right:calc(-12px + ${right});`;
            }
          } else {
            if (this.currentLevel >= 1 && this.currentLevel <= 3) {
              this.yellowStyle = `top:calc(-300px + calc(${top} * 0.75)); left:calc(9px + calc(${left} * 0.75));`;
            } else if(this.currentLevel == 4){
              this.yellowStyle = `bottom:calc(300px + calc(${bottom} * 0.75)); right:calc(-9px + calc(${right} * 0.75));`;
            } else if (this.currentLevel == 7) {
              this.yellowStyle = `bottom:calc(225px + calc(${bottom} * 0.75)); right:calc(-9px + calc(${right} * 0.75));`;
            }
          }
        });
      } else {
        this.yellowStyle = '';
      }
    },
    playerYellowButterflyAnswer(newPlayerYellowButterflyAnswer) {
      if (
        newPlayerYellowButterflyAnswer.includes('absolute') ||
          newPlayerYellowButterflyAnswer.includes('fixed')
      ) {
        let words = newPlayerYellowButterflyAnswer.split(';');
        let top = '0';
        let bottom = '0';
        let right = '0';
        let left = '0';
        words.forEach((el) => {
          if (el.includes('top')) {
            top = el.replace('top', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('bottom')) {
            bottom = el
              .replace('bottom', '')
              .replace(':', '')
              .replace('px', '')
              .replaceAll(' ', '');
            if (this.currentLevel == 6 || this.currentLevel == 7) {
              bottom = -200 + Number.parseInt(bottom);
            }
          } else if (el.includes('left')) {
            left = el.replace('left', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('right')) {
            right = el
              .replace('right', '')
              .replace(':', '')
              .replace('px', '')
              .replaceAll(' ', '');
            if (this.currentLevel == 6) {
              right = -300 + Number.parseInt(right);
            }else if(this.currentLevel == 7){
              right = -200 + Number.parseInt(right);
            }
          }
          if (this.width > 480) {
            if (this.currentLevel == 6) {
              this.yellowButterflyStyle = `bottom:calc(780px + ${bottom}px); right:${right}px;`;
            } else if(this.currentLevel == 7) {
              this.yellowButterflyStyle = `bottom:calc(1060px + ${bottom}px); right:calc(${right}px - 100px);`;
            }
          } else {
            if (this.currentLevel == 6) {
              this.yellowButterflyStyle = `bottom:calc(585px + calc(${bottom}px * 0.75)); right:calc(${right}px * 0.75);`;
            } else if(this.currentLevel == 7){
              this.yellowButterflyStyle = `bottom:calc(795px + calc(${bottom} * 0.75)); right:calc(-75px + calc(${right} * 0.75));`;
            }
          }
        });
      } else {
        this.yellowButterflyStyle = '';
      }
    },
    playerRedButterflyAnswer(newPlayerRedButterflyAnswer) {
      if (
        newPlayerRedButterflyAnswer.includes('absolute') ||
        newPlayerRedButterflyAnswer.includes('fixed')
      ) {
        let words = newPlayerRedButterflyAnswer.split(';');
        let top = '0';
        let bottom = '0';
        let right = '0';
        let left = '0';
        words.forEach((el) => {
          if (el.includes('top')) {
            top = el.replace('top', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('bottom')) {
            bottom = el
              .replace('bottom', '')
              .replace(':', '')
              .replaceAll(' ', '');
          } else if (el.includes('left')) {
            left = el.replace('left', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('right')) {
            right = el
              .replace('right', '')
              .replace(':', '')
              .replaceAll(' ', '');
          }
          if (this.width > 480) {
            if (this.currentLevel == 7) {
              this.redButterflyStyle = `top:calc(-1080px + ${top}); left:calc(0px + ${left});`;
            } else {
              this.redButterflyStyle = `bottom:calc(327px + ${bottom}); right:calc(-50px + ${right});`;
            }
          } else {
            if (this.currentLevel == 7) {
              this.redButterflyStyle = `top:calc(-810px + calc(${top} * 0.75)); left:calc(0px + calc(${left} * 0.75));`;
            } else {
              this.redButterflyStyle = `bottom:calc(245px + calc(${bottom} * 0.75)); right:calc(-38px + calc(${right} * 0.75));`;
            }
          }
        });
      } else {
        this.redButterflyStyle = '';
      }
    },
    playerBlueButterflyAnswer(newPlayerBlueButterflyAnswer) {
      if (
        newPlayerBlueButterflyAnswer.includes('absolute') ||
          newPlayerBlueButterflyAnswer.includes('fixed')
      ) {
        let words = newPlayerBlueButterflyAnswer.split(';');
        let top = '0';
        let bottom = '0';
        let right = '0';
        let left = '0';
        words.forEach((el) => {
          if (el.includes('top')) {
            top = el.replace('top', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('bottom')) {
            bottom = el
              .replace('bottom', '')
              .replace(':', '')
              .replaceAll(' ', '');
          } else if (el.includes('left')) {
            left = el.replace('left', '').replace(':', '').replaceAll(' ', '');
          } else if (el.includes('right')) {
            right = el
              .replace('right', '')
              .replace(':', '')
              .replaceAll(' ', '');
          }
          if (this.width > 480) {
            if (this.currentLevel == 5) {
              this.blueButterflyStyle = `top:calc(-400px - ${top}); left:${left};`;
            } else if (this.currentLevel == 6) {
              this.blueButterflyStyle = `top:calc(-800px + ${top}); left:${left};`;
            } else if(this.currentLevel == 7) {
              this.blueButterflyStyle = `top:calc(-1000px + ${top}); left:${left};`;
            }
          } else {
            if (this.currentLevel == 5) {
              this.blueButterflyStyle = `top:calc(-300px - calc(${top} * 0.75)); left:calc(${left} * 0.75);`;
            } else if (this.currentLevel == 6) {
              this.blueButterflyStyle = `top:calc(-600px + calc(${top} * 0.75)); left:calc(${left} * 0.75);`;
            } else if(this.currentLevel == 7) {
              this.blueButterflyStyle = `top:calc(-750px + calc(${top} * 0.75)); left:calc(${left} * 0.75);`;
            }
          }
        });
      } else {
        this.blueButterflyStyle = '';
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
    setCurrentLevel(level) {
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
      this.currentLevel = level;
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
