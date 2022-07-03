document.addEventListener('DOMContentLoaded', function() {
  const productJson = document.querySelectorAll('[id^=ProductJson-');

  if (productJson.length > 0) {
    for (let i = 0; i < productJson.length; i++) {
      const current = productJson[i];
      const sectionId = current.id.replace('ProductJson-', '');
      const section = document.querySelector('[data-section-id="' + sectionId + '"]');
      const product = JSON.parse(current.text);

      if (product.options.length === 1) {
        const unavailableVariants = [];

        for (let j = 0; j < product.variants.length; j++) {
          const variant = product.variants[j];

          if (!variant.available) {
            unavailableVariants.push(variant);
          }
        }

        if (unavailableVariants.length > 0) {
          const mutationCallback = function() {
            const variantOptions = section.querySelectorAll('.single-option-selector option');

            if (variantOptions.length > 0) {
              for (let k = 0; k < unavailableVariants.length; k++) {
                const unavailableVariant = unavailableVariants[k];

                for (let l = 0; l < variantOptions.length; l++) {
                  const option = variantOptions[l];

                  if (unavailableVariant.title === option.value) {
                    option.remove();
                  }
                }
              }

              if (typeof observer === 'object' && typeof observer.disconnect === 'function') {
                observer.disconnect();
              }
            }
          }

          const observer = new MutationObserver(mutationCallback);
          const addToCartForm = document.querySelector('form[action*="/cart/add"]');

          mutationCallback();

          if (window.MutationObserver && addToCartForm.length) {
            const config = { childList: true, subtree: true };

            if (typeof observer === 'object' && typeof observer.disconnect === 'function') {
              observer.disconnect();
            }

            observer.observe(addToCartForm, config);
          }
        }
      }
    }
  }
});