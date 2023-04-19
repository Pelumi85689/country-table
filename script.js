let table = document.getElementById("table");
    fetch("https://restcountries.com/v3.1/all").then((dan)=>dan.json()).then((res)=>{
        console.log(res);
        res.forEach((element, index) => {
            let contName = element.name.common
            let contCapital = element.capital
            let population = element.population
            let language = element.languages
            console.log(language);
            table.innerHTML +=`
                <tbody>
                    <tr>
                    <td>${index+1}</td>
                    <td>${contName}</td>
                    <td>${contCapital}</td>
                    <td>${population}</td>
                    <td>${language}</td>
                    </tr>
                </tbody>
                `
        });
    })