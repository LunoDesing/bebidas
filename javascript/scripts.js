var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 1,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 2,
		spaceBetween: 50,
	  },
	} 
    });


// ---------------------------- PRODUCTOS -----------------------------------------


/*document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product");
  const loadMoreButton = document.getElementById("loadMoreAll");

  // Número de productos a mostrar inicialmente
  const initialProductsToShow = 10;
  let currentProductsToShow = initialProductsToShow;

  // Mostrar productos iniciales
  showProducts(initialProductsToShow);

  filterButtons.forEach(button => {
    button.addEventListener("click", function() {
      const filterValue = this.getAttribute("data-filter");

      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      // Mostrar productos según la categoría seleccionada
      products.forEach(product => {
        if (filterValue === "all" || product.classList.contains(filterValue)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });

      // Restablecer el contador de productos mostrados
      if (filterValue === "all") {
        currentProductsToShow = initialProductsToShow;
        showProducts(currentProductsToShow);
        // Mostrar el botón "Cargar más" solo cuando la categoría es "all"
        loadMoreButton.style.display = "block";
      } else {
        // Ocultar el botón "Cargar más" para otras categorías
        loadMoreButton.style.display = "none";
      }
    });
  });

  // Manejar clic en el botón "Cargar más"
  loadMoreButton.addEventListener("click", function() {
    currentProductsToShow += initialProductsToShow;
    showProducts(currentProductsToShow);
  });

  // Función para mostrar productos
  function showProducts(numToShow) {
    products.forEach((product, index) => {
      if (index < numToShow) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

    // Mostrar botón "Cargar más" si hay más productos por mostrar
    if (numToShow < products.length) {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
    }
  }

  // Función para manejar la búsqueda
  document.getElementById("searchButton").addEventListener("click", function() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    products.forEach(product => {
      const productName = product.textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});*/


document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product");
  const loadMoreButton = document.getElementById("loadMoreAll");

  // Número de productos a mostrar inicialmente
  const initialProductsToShow = 12;
  let currentProductsToShow = initialProductsToShow;

  // Mostrar productos iniciales
  showProducts(initialProductsToShow);

  filterButtons.forEach(button => {
    button.addEventListener("click", function() {
      const filterValue = this.getAttribute("data-filter");

      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      // Mostrar productos según la categoría seleccionada
      products.forEach(product => {
        if (filterValue === "all" || product.classList.contains(filterValue)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });

      // Restablecer el contador de productos mostrados
      if (filterValue === "all") {
        currentProductsToShow = initialProductsToShow;
        showProducts(currentProductsToShow);
        // Mostrar el botón "Cargar más" solo cuando la categoría es "all"
        loadMoreButton.style.display = "block";
      } else {
        // Ocultar el botón "Cargar más" para otras categorías
        loadMoreButton.style.display = "none";
      }
    });
  });

  // Manejar clic en el botón "Cargar más"
  loadMoreButton.addEventListener("click", function() {
    currentProductsToShow += initialProductsToShow;
    showProducts(currentProductsToShow);
  });

  // Función para mostrar productos
  function showProducts(numToShow) {
    products.forEach((product, index) => {
      if (index < numToShow) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

    // Mostrar botón "Cargar más" si hay más productos por mostrar
    if (numToShow < products.length) {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
    }
  }

  // Función para manejar la búsqueda
  document.getElementById("searchButton").addEventListener("click", function() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    let foundMatch = false; // Variable para verificar si se encontró una coincidencia

    products.forEach(product => {
      const productName = product.textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        product.style.display = "block";
        foundMatch = true; // Se encontró una coincidencia
      } else {
        product.style.display = "none";
      }
    });

    // Mostrar alert si no se encontró ninguna coincidencia
    if (!foundMatch) {
      alert("No se encontraron productos con ese nombre.");
    }
  });
});

// ----------------------------- Lightbox --------------------------------------------


$(document).ready(function () {
  const imgElements = document.querySelectorAll('.img');

  imgElements.forEach(function (imgElement) {
    imgElement.addEventListener('click', function () {
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      document.body.appendChild(overlay);

      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';

      const clonedImg = imgElement.cloneNode(true);
      lightbox.appendChild(clonedImg);

      const closeButton = document.createElement('button');
      closeButton.textContent = 'Cerrar';
      closeButton.className = 'close-button';
      closeButton.addEventListener('click', function () {
        overlay.classList.remove('active');
        lightbox.classList.remove('active');
        setTimeout(function () {
          document.body.removeChild(overlay);
          document.body.removeChild(lightbox);
        }, 300);
      });
      lightbox.appendChild(closeButton);

      document.body.appendChild(lightbox);

      setTimeout(function () {
        overlay.classList.add('active');
        lightbox.classList.add('active');
      }, 50);
    });
  });
});





