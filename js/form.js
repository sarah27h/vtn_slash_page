const steps = Array.from(document.querySelectorAll('.step'));
const nextBtns = Array.from(document.querySelectorAll('.next-btn'));
const prevBtns = Array.from(document.querySelectorAll('.prev-btn'));

// progress bar
const completedProgressBar = document.querySelector('.progress-bar-completed');
const remainProgressBar = document.querySelector('.progress-bar-remain');
const stepTitle = document.querySelectorAll('.step-title');
const progressStepTitle = document.querySelector('.progress-step-title');
console.log(stepTitle);
const progressBarValue = document.querySelector('.progress-bar-value');
progressBarValue.textContent = completedProgressBar.style.width;

const changeProgressBar = (btn) => {
  let compeletedStep = Number(completedProgressBar.style.width.slice(0, -1));

  let remainingStep = Number(remainProgressBar.style.width.slice(0, -1));
  let titleStep = Number(progressStepTitle.style.paddingLeft.slice(0, -1));

  if (btn === 'next') {
    compeletedStep += 20;
    remainingStep -= 20;
    titleStep += 20;
  } else if (btn === 'prev') {
    compeletedStep -= 20;
    remainingStep += 20;
    titleStep -= 20;
  }
  progressStepTitle.style.paddingLeft = `${titleStep}%`;
  completedProgressBar.style.width = `${compeletedStep}%`;
  remainProgressBar.style.width = `${remainingStep}%`;

  progressBarValue.textContent = completedProgressBar.style.width;
};

nextBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    changeStep('next');
    changeProgressBar('next');
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    changeStep('prev');
    changeProgressBar('prev');
  });
});

const changeStep = (btn) => {
  const activeStep = document.querySelector('.show');
  let activeStepIndex = steps.indexOf(activeStep);
  steps[activeStepIndex].classList.remove('show');
  steps[activeStepIndex].classList.add('hidden');

  if (btn === 'next') {
    activeStepIndex++;
  } else if (btn === 'prev') {
    activeStepIndex--;
  }

  steps[activeStepIndex].classList.add('show');
  steps[activeStepIndex].classList.remove('hidden');
  progressStepTitle.textContent = stepTitle[activeStepIndex].innerText;
};
