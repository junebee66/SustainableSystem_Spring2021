changer = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let aNum = Math.random() * 1.0;
    let a = aNum.toFixed(1);

    let alter = `rgba(${r}, ${g}, ${b}, ${a})`;
    const colorCode = document.querySelector('#colorCode');
    colorCode.value = alter;
    return alter;
}

function copier() {
    let value = document.getElementsByClassName('get')[0];
    value.select();
    document.execCommand('copy')
}


const copyButton = document.querySelector('.copy').addEventListener('click', copier)



$('button').click(function () {
    $('#space').fadeOut(500, function () {
        let alter = changer();
        colorCode.innerText = alter;
        $('#space')
            .css({
                'background-color': alter
            })
            .fadeIn(1000);
    });

    $('button').fadeOut(500, function () {
        $('button')
            .css({
                'background-color': 'transparent'
            })
            .fadeIn(1000);
    });
});
