const ckElements = document.querySelectorAll('.ck');
const bundleElements = document.querySelectorAll('.bundle');
const subNav = document.querySelector('.subNav');

updateSubNavPadding();

function updateSubNavPadding() {
    const onBundle = document.querySelector('.on + .bundle');
    const BundleCard = onBundle ? onBundle.querySelectorAll('.cards') : [];
    const paddingValue = BundleCard.length * 260;
    subNav.style.paddingBottom = paddingValue + 'px';
}

ckElements.forEach((ckElement) => {
    ckElement.addEventListener('click', function () {
        ckElements.forEach((element) => {
            element.classList.remove('on');
        });
        this.classList.add('on');

        updateSubNavPadding();
    });
});
