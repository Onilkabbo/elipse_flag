var wrapper                      = document.querySelector('.container'),
    device_width                 = window.innerWidth,
    calculated_wrapper_height    = (window.screen.height*device_width)/window.screen.width;

window.addEventListener('resize', function() {
    this.window.location.reload();
});

console.log(parseInt(calculated_wrapper_height))

// wrapper.style.height = parseInt(calculated_wrapper_height)+'px';