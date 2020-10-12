function appear(elm, i, step, speed) {
    let t_o;
    //initial opacity
    i = i || 0;
    //opacity increment
    step = step || 5;
    //time waited between two opacity increments in msec
    speed = speed || 50;

    t_o = setInterval(function () {
        //get opacity in decimals
        let opacity = i / 100;
        //set the next opacity step
        i = i + step;
        if (opacity > 1 || opacity < 0) {
            clearInterval(t_o);
            //if 1-opaque or 0-transparent, stop
            return;
        }
        elm.style.opacity = opacity;
        elm.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
    }, speed);
}

appear(document.getElementsByClassName('hero-name')[0], 0, 5, 100);
appear(document.getElementsByClassName('hero-welcome')[0], 0, 5, 150);
appear(document.getElementsByClassName('arrow-down')[0], 0, 5, 200);


