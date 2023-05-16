axios.get("https://catfact.ninja/fact")
 .then(function(res) {
    let el = document.querySelector(".fact")
    el.innerHTML = res.data.fact;
 })

 window.addEventListener('load', function() {
    var images = [
      'images/cat_1.jpg',
      'images/cat_2.jpg',
      'images/cat_3.jpg',
      'images/cat_4.jpg'
    ];

    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = document.getElementById('randomImage');

    randomImage.src = images[randomIndex];
  });

  window.addEventListener('DOMContentLoaded', function() {
    var radios = document.querySelectorAll('input[name="palette"]');
    var root = document.documentElement;
  
 
    var storedPalette = localStorage.getItem('selectedPalette');
    if (storedPalette) {

      radios.forEach(function(radio) {
        if (radio.value === storedPalette) {
          radio.checked = true;
        }
      });
      setPaletteColors(storedPalette);
    }
  
    radios.forEach(function(radio) {
      radio.addEventListener('change', function() {
        var selectedPalette = this.value;
  
        setPaletteColors(selectedPalette);
  
        localStorage.setItem('selectedPalette', selectedPalette);
      });
    }); 
  
    function setPaletteColors(palette) {
      switch (palette) {
        case 'p1':
          root.style.setProperty('--p1-c1', '#8294C4');
          root.style.setProperty('--p1-c2', '#ACB1D6');
          root.style.setProperty('--p1-c3', '#DBDFEA');
          root.style.setProperty('--p1-c4', '#FFEAD2');
          break;
        case 'p2':
          root.style.setProperty('--p1-c1', '#B2A4FF');
          root.style.setProperty('--p1-c2', '#FFB4B4');
          root.style.setProperty('--p1-c3', '#FFDEB4');
          root.style.setProperty('--p1-c4', '#FDF7C3');
          break;
        case 'p3':
          root.style.setProperty('--p1-c1', '#FDF4F5');
          root.style.setProperty('--p1-c2', '#E8A0BF');
          root.style.setProperty('--p1-c3', '#e3d1ec');
          root.style.setProperty('--p1-c4', '#933ce4');
          break;
        case 'p4':
          root.style.setProperty('--p1-c1', '#CCD5AE');
          root.style.setProperty('--p1-c2', '#E9EDC9');
          root.style.setProperty('--p1-c3', '#FEFAE0');
          root.style.setProperty('--p1-c4', '#807969');
          break;
        case 'p5':
          root.style.setProperty('--p1-c1', '#FFF5E4');
          root.style.setProperty('--p1-c2', '#FFE3E1');
          root.style.setProperty('--p1-c3', '#FFD1D1');
          root.style.setProperty('--p1-c4', '#FF9494');
          break;
        default:
          // Default palette
          root.style.setProperty('--p1-c1', '#8294C4');
          root.style.setProperty('--p1-c2', '#ACB1D6');
          root.style.setProperty('--p1-c3', '#DBDFEA');
          root.style.setProperty('--p1-c4', '#FFEAD2');
          break;
      }
    }
  });

  