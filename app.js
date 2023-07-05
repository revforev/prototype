// I. Animation

let slide = document.querySelector('#Layer_3');
let bubbles = document.querySelector(".bubbles");



// II. Interaction

// 1.Navigation

slide.addEventListener('click', () => {
  let envelope = document.querySelector("#envelope");
  let secondenvelope = document.querySelector("#secondenvelope");
  if (envelope.style.display = 'block') {
    envelope.style.display = 'none';
    secondenvelope.style.display = 'block';
  } else {
    envelope.style.display === 'block';
  }
});

// 2.Build

     // Get checkboxes 
    const baseyes = document.querySelector('#baseyes');
    const baseno = document.querySelector('#baseno');
    const baseyeslabel = document.querySelector('#baseyeslabel');
    const basenolabel = document.querySelector('#basenolabel');
    const garlicyes = document.querySelector('#garlicyes');
    const garlicno = document.querySelector('#garlicno');
    const garlicyeslabel = document.querySelector('#garlicyeslabel');
    const garlicnolabel = document.querySelector('#garlicnolabel');
    const potato = document.querySelector('#potato');
    const carrot = document.querySelector('#carrot');
    const aubergine = document.querySelector('#aubergine');
    const vegetables = document.querySelector('#vegetablesq');
    const nomilk = document.querySelector('#nomilk');
    const coconutmilk = document.querySelector('#coconutmilk');
    const oatmilk = document.querySelector('#oatmilk');
    const milk = document.querySelector('#milkq');
    const protein = document.querySelector('#proteinq');
    const beans = document.querySelector('#beans');
    const chickpeas = document.querySelector('#chickpeas');
    const quorn = document.querySelector('#quorn');
    const topping = document.querySelector('#toppingq');
    const coriander = document.querySelector('#coriander');
    const parsley = document.querySelector('#parsley');
    const thyme = document.querySelector('#thyme');




     // Get icons
    const icarrot = document.querySelector('#icarrot');
    const iaubergine = document.querySelector('#iaubergine');
    const ipotato = document.querySelector('#ipotato');
    const ionion = document.querySelector('#ionion');
    const ivegoil = document.querySelector('#ivegoil');
    const icoconut = document.querySelector('#icoconut');
    const igarlic = document.querySelector('#igarlic');
    const itomato = document.querySelector('#itomato');
    const veggiebar = document.querySelector('#veggiebar');

// QUESTION 1 - DO YOU HAVE THE BASE?
    // Add an event listener to the checkbox
    baseyes.addEventListener('change', () => {
      // Get the div element
      const questgarlic = document.querySelector('#questgarlic');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        quest1.style.display = 'none';
        questgarlic.style.display = 'block';
        baseyes.style.display = 'none';
        baseno.style.display = 'none';
        baseyeslabel.style.display = 'none';
        basenolabel.style.display = 'none';
        garlicyes.style.display = 'flex';
        garlicno.style.display = 'flex';
        garlicyeslabel.style.display = 'flex';
        garlicnolabel.style.display = 'flex';
        ivegoil.style.display = 'inline';
        ionion.style.display = 'inline';
        itomato.style.display = 'inline';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });

// QUESTION 1.5 - DO YOU HAVE GARLIC?
    // Add an event listener to the checkbox
    garlicyes.addEventListener('change', () => {
      // Get the div element
      const quest2 = document.querySelector('#quest2');

      // Check if the checkbox is checked
      if (garlicyes.checked) {
        // Show the div element
        questgarlic.style.display = 'none';
        quest2.style.display = 'block';
        quest1.style.display = 'none';
        vegetablesq.style.display = 'block';
        igarlic.style.display = 'inline';
        ivegoil.style.display = 'inline';
        ionion.style.display = 'inline';
        itomato.style.display = 'inline';
        garlicyes.style.display = 'none';
        garlicno.style.display = 'none';
        garlicyeslabel.style.display = 'none';
        garlicnolabel.style.display = 'none';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });

// QUESTION 2 - CHOOSE A VEGETABLE
        // Add an event listener to the checkbox
    potato.addEventListener('change', () => {
      // Get the div element
      const quest3 = document.querySelector('#quest3');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        quest2.style.display = 'none';
        quest3.style.display = 'block';
        vegetables.style.display = 'none';
        ipotato.style.display = 'inline';
        milkq.style.display = 'block';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });


            // Add an event listener to the checkbox
    carrot.addEventListener('change', () => {
      // Get the div element
      const quest3 = document.querySelector('#quest3');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        quest3.style.display = 'block';
        quest2.style.display = 'none';
        vegetables.style.display = 'none';
        icarrot.style.display = 'inline';
        milkq.style.display = 'block';

      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });

                // Add an event listener to the checkbox
    aubergine.addEventListener('change', () => {
      // Get the div element
      const quest3 = document.querySelector('#quest3');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        quest3.style.display = 'block';
        quest2.style.display = 'none';
        vegetables.style.display = 'none';
        iaubergine.style.display = 'inline';
        milkq.style.display = 'block';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });


// QUESTION 3 - CHOOSE YOUR MILK
        // Add an event listener to the checkbox
    coconutmilk.addEventListener('change', () => {
      // Get the div element
      const quest4 = document.querySelector('#quest4');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        quest4.style.display = 'block';
        quest3.style.display = 'none';
        milkq.style.display = 'none';
        icoconut.style.display = 'inline';
        protein.style.display = 'block';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });


            // Add an event listener to the checkbox
    oatmilk.addEventListener('change', () => {
      // Get the div element
      const quest4 = document.querySelector('#quest4');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        quest4.style.display = 'block';
        quest3.style.display = 'none';
        milkq.style.display = 'none';
        protein.style.display = 'block';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });

                // Add an event listener to the checkbox
    nomilk.addEventListener('change', () => {
      // Get the div element
      const quest4 = document.querySelector('#quest4');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        quest4.style.display = 'block';
        quest3.style.display = 'none';
        vegetables.style.display = 'none';
        milkq.style.display = 'none';
        protein.style.display = 'block';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });


    // QUESTION 4 - CHOOSE YOUR PROTEIN
        // Add an event listener to the checkbox
    beans.addEventListener('change', () => {
      // Get the div element
      const quest5 = document.querySelector('#quest5');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        quest4.style.display = 'none';
        quest5.style.display = 'block';
        protein.style.display = 'none';
        topping.style.display = 'block';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });


            // Add an event listener to the checkbox
    chickpeas.addEventListener('change', () => {
      // Get the div element
      const quest5 = document.querySelector('#quest5');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        quest4.style.display = 'none';
        quest5.style.display = 'block';
        protein.style.display = 'none';
        topping.style.display = 'block';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });

                // Add an event listener to the checkbox
    quorn.addEventListener('change', () => {
      // Get the div element
      const quest5 = document.querySelector('#quest5');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        quest4.style.display = 'none';
        quest5.style.display = 'block';
        protein.style.display = 'none';
        topping.style.display = 'block';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });


    // QUESTION 5 - CHOOSE YOUR TOPING
        // Add an event listener to the checkbox
    coriander.addEventListener('change', () => {
      // Get the div element
      const qdone = document.querySelector('#qdone');

      // Check if the checkbox is checked
      if (coriander.checked) {
        // Show the div element
        quest5.style.display = 'none';
        topping.style.display = 'none';
        qdone.style.display = 'block';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });


            // Add an event listener to the checkbox
    parsley.addEventListener('change', () => {
      // Get the div element
      const qdone = document.querySelector('#qdone');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        qdone.style.display = 'block';
        topping.style.display = 'none';
        quest5.style.display = 'none';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });

                // Add an event listener to the checkbox
    thyme.addEventListener('change', () => {
      // Get the div element
      const qdone = document.querySelector('#qdone');

      // Check if the checkbox is checked
      if (baseyes.checked) {
        // Show the div element
        qdone.style.display = 'block';
        topping.style.display = 'none';
        quest5.style.display = 'none';
      } else {
        // Hide the div element
        quest2.style.display = 'none';
      }
    });


