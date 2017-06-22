/**
 * Created by dominikoso on 17.01.17.
 */
var wartownik=false;

    function opis(numer)
    {
        var div = document.getElementById("description");

        switch (numer)
        {
            case 1:
                div.textContent = "Informacje nt. BIOSU, Systemu, Producenta, Hardware, Urządzenia";
                break;
            case 2:
                div.textContent = "Konfiguracja BIOSU";
                break;
            case 3:
                div.textContent = "Zarządzanie Bezpieczeństwem, ustawianie hasła na startup/BIOS";
                break;
            case 4:
                div.textContent = "Zarządzanie sekwencjami uruchamiania";
                break;
            case 5:
                div.textContent = "Możliwości opuszczenia Biosu i Zapisu";
                break;
            default:
                div.texContent = "Najedź na dowolną opcje, aby zobaczyć jej opis"
                break;
        }
    }
