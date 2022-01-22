 const secondHand = document.querySelector("#second");
 const minuteHand = document.querySelector("#minute");
 const hourHand = document.querySelector("#hour");



 function setData() {
     const now = new Date();
     const second = (now.getSeconds() / 60) * 360 - 90;
     const minute = (now.getMinutes() / 60) * 360 - 90;
     const hour = (now.getHours() / 12) * 360 - 90;


     secondHand.style.transform = `rotate(${second}deg)`;
     minuteHand.style.transform = `rotate(${minute}deg)`;
     hourHand.style.transform = `rotate(${hour}deg)`;

     secondHand.lastElementChild.innerHTML=`<p class='text' style="transform:rotate(-${second}deg)">${now.getSeconds()}</p>`;
     minuteHand.lastElementChild.innerHTML=`<p class='text' style="transform:rotate(-${minute}deg)">${now.getMinutes()}</p>`;
     hourHand.lastElementChild.innerHTML=`<p class='text' style="transform:rotate(-${hour}deg)">${Math.floor(now.getHours()%12 || 12)}</p>`;

 }

 setInterval(setData, 1000);