function update() {

    let hours = document.querySelector('.hours')
    let minutes = document.querySelector('.minutes')
    let seconds = document.querySelector('.seconds')

    const date = new Date();



    let secondsNow = date.getSeconds()
    let minutesNow = date.getMinutes()
    let hoursNow = date.getHours() % 12


    console.log(hoursNow)
    console.log(minutesNow)
    console.log(secondsNow)

    secondsAngle = ( secondsNow * 6 ) - 90;
    minutesAngle = minutesNow * 6 - 90;
    hoursAngle = hoursNow * 30 - 90 + (minutesAngle / 360 * 30)//  

    seconds.style.transform = `rotate(${secondsAngle}deg)`;
    minutes.style.transform = `rotate(${minutesAngle}deg)`;
    hours.style.transform = `rotate(${hoursAngle}deg)`;

}

setInterval(update, 1000);

