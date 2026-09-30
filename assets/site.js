document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Dynamic Year
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // 3. Interactive Food Scanner Demo Data & Logic
  const mealPresets = {
    pho: {
      name: "Phở Bò Tái Nạm Hà Nội",
      unitDefault: "1 tô vừa",
      baseCal: 540,
      baseP: 32,
      baseC: 68,
      baseF: 14,
      ingredients: [
        { name: "Bánh phở tươi", unit: "180g", cal: 220 },
        { name: "Thịt bò tái & nạm mềm", unit: "120g", cal: 210 },
        { name: "Nước dùng phở ninh xương", unit: "350ml", cal: 90 },
        { name: "Hành hoa, rau mùi, quẩy nhỏ", unit: "40g", cal: 20 }
      ]
    },
    'com-tam': {
      name: "Cơm Tấm Sườn Bì Chả Sài Gòn",
      unitDefault: "1 đĩa đầy đủ",
      baseCal: 720,
      baseP: 38,
      baseC: 82,
      baseF: 26,
      ingredients: [
        { name: "Cơm tấm hạt vỡ", unit: "200g", cal: 260 },
        { name: "Sườn cốt lết nướng mật ong", unit: "140g", cal: 280 },
        { name: "Chả trứng hấp thịt & bì heo", unit: "90g", cal: 140 },
        { name: "Mỡ hành & đồ chua", unit: "35g", cal: 40 }
      ]
    },
    'bun-cha': {
      name: "Bún Chả Nem Nướng Hà Nội",
      unitDefault: "1 suất tiêu chuẩn",
      baseCal: 610,
      baseP: 28,
      baseC: 74,
      baseF: 21,
      ingredients: [
        { name: "Bún tươi sợi mảnh", unit: "200g", cal: 220 },
        { name: "Chả miếng & chả viên nướng than hoa", unit: "130g", cal: 270 },
        { name: "Nước mắm đu đủ chua ngọt", unit: "120ml", cal: 90 },
        { name: "Rau kinh giới, tía tô, xà lách", unit: "50g", cal: 30 }
      ]
    },
    'com-nha': {
      name: "Cơm Nhà: Cá Basa Kho & Canh Rau",
      unitDefault: "1 mâm cơm gia đình",
      baseCal: 580,
      baseP: 34,
      baseC: 65,
      baseF: 18,
      ingredients: [
        { name: "Cá basa kho tộ đậm đà", unit: "140g (1 khúc)", cal: 220 },
        { name: "Cơm trắng thơm dẻo", unit: "180g (1 bát)", cal: 240 },
        { name: "Canh rau ngót nấu tôm băm", unit: "150ml", cal: 50 },
        { name: "Rau muống luộc / xào tỏi", unit: "100g", cal: 70 }
      ]
    }
  };

  let currentMealKey = 'com-nha';
  let currentPortionMultiplier = 1.0;

  const dishTitle = document.getElementById('demo-dish-name');
  const dishPortionLabel = document.getElementById('demo-portion-text');
  const dishIngredientsList = document.getElementById('demo-ingredients-list');
  const valCal = document.getElementById('demo-val-cal');
  const valP = document.getElementById('demo-val-p');
  const valC = document.getElementById('demo-val-c');
  const valF = document.getElementById('demo-val-f');
  const portionSlider = document.getElementById('demo-portion-slider');
  const portionSliderValue = document.getElementById('demo-portion-value');

  function renderScannerDemo() {
    const meal = mealPresets[currentMealKey];
    if (!meal || !dishTitle) return;

    dishTitle.textContent = meal.name;
    if (dishPortionLabel) {
      dishPortionLabel.textContent = `${meal.unitDefault} (${currentPortionMultiplier}x)`;
    }
    if (portionSliderValue) {
      portionSliderValue.textContent = `${currentPortionMultiplier}x khẩu phần`;
    }

    const scaledCal = Math.round(meal.baseCal * currentPortionMultiplier);
    const scaledP = Math.round(meal.baseP * currentPortionMultiplier);
    const scaledC = Math.round(meal.baseC * currentPortionMultiplier);
    const scaledF = Math.round(meal.baseF * currentPortionMultiplier);

    if (valCal) valCal.textContent = `${scaledCal} kcal`;
    if (valP) valP.textContent = `${scaledP} g`;
    if (valC) valC.textContent = `${scaledC} g`;
    if (valF) valF.textContent = `${scaledF} g`;

    if (dishIngredientsList) {
      dishIngredientsList.innerHTML = meal.ingredients
        .map((item) => {
          const itemCal = Math.round(item.cal * currentPortionMultiplier);
          return `
          <div class="ingredient-item">
            <div>
              <strong>${item.name}</strong>
              <div><span>Định lượng: ${item.unit}</span></div>
            </div>
            <span class="detected-chip" style="font-weight:750; color:var(--green-deep);">~${itemCal} kcal</span>
          </div>`;
        })
        .join('');
    }
  }

  const tabButtons = document.querySelectorAll('.tab-btn[data-meal]');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentMealKey = btn.getAttribute('data-meal');
      renderScannerDemo();
    });
  });

  if (portionSlider) {
    portionSlider.addEventListener('input', (e) => {
      currentPortionMultiplier = parseFloat(e.target.value);
      renderScannerDemo();
    });
  }

  renderScannerDemo();

  // 4. Interactive BMR & Goal Pace Calculator (Mifflin-St Jeor Engine v1.2.1)
  const calcForm = document.getElementById('macro-calc-form');
  const calcOutputCal = document.getElementById('calc-target-cal');
  const calcOutputBmr = document.getElementById('calc-bmr');
  const calcOutputTdee = document.getElementById('calc-tdee');
  const calcOutputP = document.getElementById('calc-p');
  const calcOutputC = document.getElementById('calc-c');
  const calcOutputF = document.getElementById('calc-f');
  const paceButtons = document.querySelectorAll('.pace-option-btn');
  let selectedPace = 550; // default Tho: deficit 550 kcal (0.5 kg/week)

  paceButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      paceButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      selectedPace = parseInt(btn.getAttribute('data-pace'), 10);
      recalculateMacros();
    });
  });

  function recalculateMacros() {
    if (!calcForm) return;

    const gender = calcForm.querySelector('input[name="gender"]:checked')?.value || 'male';
    const weight = parseFloat(document.getElementById('calc-weight')?.value) || 68;
    const height = parseFloat(document.getElementById('calc-height')?.value) || 172;
    const age = parseFloat(document.getElementById('calc-age')?.value) || 25;
    const pal = parseFloat(document.getElementById('calc-pal')?.value) || 1.375;

    // Mifflin-St Jeor Formula
    // BMR = 10 * Weight + 6.25 * Height - 5 * Age + (gender === 'male' ? 5 : -161)
    const genderConstant = gender === 'male' ? 5 : -161;
    const bmr = Math.round(10 * weight + 6.25 * height - 5 * age + genderConstant);
    const tdee = Math.round(bmr * pal);

    // Target Calories based on Pace deficit
    const targetCalories = Math.max(1200, Math.round(tdee - selectedPace));

    // Balanced Macro Split (v1.2.1 formula):
    // Protein base: 2.2g * weight
    // Fat base: 1.0g * weight
    // Remaining calories split: 75% Carbs, 25% Fat
    const proteinBaseG = Math.round(2.2 * weight);
    const proteinKcal = proteinBaseG * 4;

    const fatBaseG = Math.round(1.0 * weight);
    const fatBaseKcal = fatBaseG * 9;

    const remainingKcal = Math.max(0, targetCalories - proteinKcal - fatBaseKcal);

    const extraCarbKcal = remainingKcal * 0.75;
    const extraFatKcal = remainingKcal * 0.25;

    const totalCarbG = Math.round(extraCarbKcal / 4);
    const totalFatG = Math.round((fatBaseKcal + extraFatKcal) / 9);
    const totalProteinG = proteinBaseG;

    if (calcOutputCal) calcOutputCal.textContent = `${targetCalories}`;
    if (calcOutputBmr) calcOutputBmr.textContent = `${bmr} kcal`;
    if (calcOutputTdee) calcOutputTdee.textContent = `${tdee} kcal`;
    if (calcOutputP) calcOutputP.textContent = `${totalProteinG} g (${Math.round((totalProteinG * 4 / targetCalories) * 100)}%)`;
    if (calcOutputC) calcOutputC.textContent = `${totalCarbG} g (${Math.round((totalCarbG * 4 / targetCalories) * 100)}%)`;
    if (calcOutputF) calcOutputF.textContent = `${totalFatG} g (${Math.round((totalFatG * 9 / targetCalories) * 100)}%)`;
  }

  if (calcForm) {
    calcForm.addEventListener('input', recalculateMacros);
    calcForm.addEventListener('change', recalculateMacros);
    recalculateMacros();
  }

  // 5. Accessible FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach((i) => {
          i.classList.remove('open');
          const t = i.querySelector('.faq-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
});
