var tooltip = document.querySelectorAll('.itemTooltip');
document.addEventListener('mousemove', followMouse, false);

function followMouse(e) {
    var vertical_offset = 75;       //set to half of tooltip height so tooltip is vertically centered on mouse position
    for (var i = tooltip.length; i--;) {
            tooltip[i].style.top = e.pageY-vertical_offset + 'px'
    }
}