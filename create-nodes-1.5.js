    const red = document.createElement('div');
        red.className = 'red';

    const  green = document.createElement('div');
    div.className = 'green';

    const blue = document.createElement('div');
    blue.className = 'blue';
    blue.textContent = 'я вложен';
    
    red.append(green);
    green.append(blue);

    console.log(red);
