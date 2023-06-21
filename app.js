const App = {
  data() {
    return {
      currentLevel: 1,
      maxLevel: 4,
      completedLevels: [false, false, false, false],
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
            flower_level4: false,
          },
          blueSquare: {
            square_blue: true,
            square_blue_level3:false,
            square_blue_level4:false
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
            flower_level4: false,
          },
          redSquare: {
            square_red: true,
            square_red_level3:false,
            square_red_level4:false
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
            square_blue_level3:true,
            square_blue_level4:false
          },
          redAnswer: 'position:relative;left:200px;top:-100px;',
          redFlower: {
            flower_red: true,
            flower: true,
            flower_level4: false,
          },
          redSquare: {
            square_red: true,
            square_red_level3:true,
            square_red_level4:false
          },
          yellowAnswer: 'position:relative;top:-200px;',
          yellowFlower: {
            flower_yellow: true,
            flower: true,
            flower_level4: false,
          },
          yellowSquare: {
            square_yellow: true,
            square_yellow_level3:true,
            square_yellow_level4:false
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
            flower: false,
            flower_level4: true,
          },
          blueSquare: {
            square_blue: true,
            square_blue_level3:false,
            square_blue_level4:true
          },
          redAnswer: 'right:-100px;',
          redFlower: {
            flower_red: true,
            flower: false,
            flower_level4: true,
          },
          redSquare: {
            square_red: true,
            square_red_level3:false,
            square_red_level4:true
          },
          yellowAnswer: 'right:-200px;bottom:200px;',
          yellowFlower: {
            flower_yellow: true,
            flower: false,
            flower_level4: true,
          },
          yellowSquare: {
            square_yellow: true,
            square_yellow_level3:false,
            square_yellow_level4:true
          },
          red2Answer: true,
          red2Square: {
            square_red2: true,
          },
        },
      ],
      answers: [
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          flowerAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          flowerAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          flowerAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          flowerAnswer: '',
        },
      ],
      playerBlueAnswer: '',
      blueStyle: '',
      redStyle: '',
      yellowStyle: '',
      playerRedAnswer: '',
      playerFlowerAnswer: '',
      playerYellowAnswer: '',
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
            if (this.currentLevel != 4) {
              this.blueStyle = `top:calc(-400px + ${top}); left:calc(12px + ${left});`;
            } else {
              this.blueStyle = `bottom:calc(400px + ${bottom}); right:calc(-12px + ${right});`;
            }
          } else {
            if (this.currentLevel != 4) {
              this.blueStyle = `top:calc(-300px + calc(${top} * 0.75)); left:calc(9px + calc(${left} * 0.75));`;
            } else {
              this.blueStyle = `bottom:calc(300px + calc(${bottom} * 0.75)); right:calc(-9px + calc(${right} * 0.75));`;
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
            if (this.currentLevel != 4) {
              this.redStyle = `top:calc(-400px + ${top}); left:calc(12px + ${left});`;
            } else {
              this.redStyle = `bottom:calc(400px + ${bottom}); right:calc(-12px + ${right});`;
            }
          } else {
            if (this.currentLevel != 4) {
              this.redStyle = `top:calc(-300px + calc(${top} * 0.75)); left:calc(9px + calc(${left} * 0.75));`;
            } else {
              this.redStyle = `bottom:calc(300px + calc(${bottom} * 0.75)); right:calc(-9px + calc(${right} * 0.75));`;
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
            if (this.currentLevel != 4) {
              this.yellowStyle = `top:calc(-400px + ${top}); left:calc(12px + ${left});`;
            } else {
              this.yellowStyle = `bottom:calc(400px + ${bottom}); right:calc(-12px + ${right});`;
            }
          } else {
            if (this.currentLevel != 4) {
              this.yellowStyle = `top:calc(-300px + calc(${top} * 0.75)); left:calc(9px + calc(${left} * 0.75));`;
            } else {
              this.yellowStyle = `bottom:calc(300px + calc(${bottom} * 0.75)); right:calc(-9px + calc(${right} * 0.75));`;
            }
          }
        });
      } else {
        this.yellowStyle = '';
      }
    },
    currentLevel(newCurrentLevel) {
      if (newCurrentLevel > 0 && newCurrentLevel < 5) {
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
      this.completedLevels = [false, false, false, false];
      this.answers = [
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          flowerAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          flowerAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          flowerAnswer: '',
        },
        {
          blueAnswer: '',
          redAnswer: '',
          yellowAnswer: '',
          flowerAnswer: '',
        },
      ];
      this.playerBlueAnswer = '';
      this.playerRedAnswer = '';
      this.playerYellowAnswer = '';
      this.playerFlowerAnswer = '';
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
      if (completed == 4) {
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
