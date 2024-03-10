console.log('funguju!');

const updateSkill = (id, number) => {
        const posuvnikPosun = document.querySelector(`#${id} .skill__progress`)
        posuvnikPosun.style.width = `${number}%`
    
        const posuvnikHodnota = document.querySelector(`#${id} .skill__value`)
        posuvnikHodnota.textContent = `${number} / 100`

        return updateSkill
    
     }
    
const html = Number(prompt("Zadej svou úroveň dovedností v HTML jako číslo v rozmezí 0-100:"))
const css = Number(prompt("Zadej svou úroveň dovedností v CSS jako číslo v rozmezí 0-100:"))
const js = Number(prompt("Zadej svou úroveň dovedností v JavaScript jako číslo v rozmezí 0-100:"))
    
updateSkill("skill1", html)
updateSkill("skill2", css)
updateSkill("skill3", js)