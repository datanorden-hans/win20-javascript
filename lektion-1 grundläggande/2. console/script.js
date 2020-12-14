/* 
    CONSOLE
    Använd för felsökning. Är typ den enda felöskingsmetoden vi har
    att använda oss utav.

    Ska bara användas i utvecklingsmiljön. Inte i produktionsmiljön.
    Dock finns vissa undantag.

    Det finns andra typer av felsökningsverktyg som heter ESLint.

    I webbläsaren: Inspektera -> Console



    sätt att felsöka på:
    myfunc()

    function myfunc() {
        console.log('1')

        if(false) {
            console.log('2')
        } else {
            console.log('3')
        }
    }

*/

console.log(".log() = informationsmeddelande")
console.warn('.warn() = varningsmeddelande')
console.error('.error() = felmeddelande')


