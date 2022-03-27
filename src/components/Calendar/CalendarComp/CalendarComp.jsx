import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Exampleform from '../Exampleform/Exampleform';
import './CalendarComp.css';
import moment from 'moment'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




const firebaseApp = initializeApp({
  apiKey: "AIzaSyC_iHDVZc4s5rlDsW2YrL4LBHAax6UNOBM",
  authDomain: "stivo-9ebcd.firebaseapp.com",
  projectId: "stivo-9ebcd"
});

//Har denna bara för att det inte dyker upp som ESLint varning så Netlify kan deploya.
//console.log(firebaseApp);


const db = getFirestore(firebaseApp);







function CalendarComp() {


    //För Datum värdet.
    const [value, onChange] = useState(new Date());

    //State för att kunna visa/Dölja formen. När formState=null då är den stängd, när den har värde så syns den.
    const [formState, setFormState] = useState();


    //Array för att samla alla dublicate-dates, den är tom i början. 
    const [duplDatesArray, setDuplDatesArray] = useState([]);

    //Används för att se till så att datan är fullständig innan den renderar ut det i kalendern. Den är satt till false i början.
    const [duplDatesArrayComplete , setDuplDatesArrayComplete] = useState(false)

  

    //Funktion för att skriva till databasen.
async function addToDb() {
  
  try {
    const docRef = await addDoc(collection(db, "bookedTimes"), {
      firstname: document.querySelector("input[name='firstname']").value,
      lastname: document.querySelector("input[name='lastname']").value,
      email: document.querySelector("input[name='email']").value,
      date: document.querySelector("input[name='date']").value,
      time: document.querySelector("#validationCustom04").value,
      description: document.querySelector("#description1").value,
      
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: " , e);
    
  }
  
}




//Funktion för att kontrollera om tid är tillgänglig. Jämför med datan i databasen.
async function checkIfTimeAvailable () {


    const querySnapshot = await getDocs(collection(db, "bookedTimes"));

    //För varje data............
    querySnapshot.forEach((doc) => {

        //...All data från DB och  omvandla till en array...
        const dataToArray = Object.values(doc.data());

        //... Ta fram alla options i array...
        let timeOptionsArr = document.querySelectorAll("option");

        //... Ta fram datumvärdet...
        const dateValue = document.querySelector("input[name='date']").value;

        // Om datan från DB som ligger i en array inkluderar Datum-värdet som är synlig......
        if(dataToArray.includes(dateValue)) {
        //.... Då för varje värde i tid-options ... 
            timeOptionsArr.forEach((e)=>{
                //...kolla igen om datan från DB innehåller tiderna som syns...
                if(dataToArray.includes(e.value)) {
                
                    //.... om ja, då disable:a tid-options.....
                    document.getElementById("validationCustom04").options.namedItem(`${e.value}`).disabled = true;
                }
            });

        }

    });
}






    //Funktion för att öppna formen..
    const openForm = () => {
      setFormState("Just a value to open form");
      checkIfTimeAvailable();
    }


    // Funktion för att stänga formen. (Se kommentar ovan för formState..)
    const cancelFormFunc = () => {
      setFormState(null);
    }



   


    // Funktion för checka om Datum är full ...idén är att hitta alla duplcates för att jag vet att samma datum kan bara finnas 4 gånger i DB:n eftersom det finns bara 4 st tider att boka per dag .. Så om DB:n innehåler 4 samma datum så släck datumet...
    const checkIfDateFull = async() => {
        const querySnapshot = await getDocs(collection(db, "bookedTimes"));

        //Skapa en array av datum, som är tom i början.
        let arrayOfDates = [];

        //För varje data... 
        querySnapshot.forEach((doc) => {
            //.. och för varje datum-värde i datan pusha till arrayOfDates arrayen ... 
            arrayOfDates.push(doc.data().date);
        });
      

        //Funktion för att hitta duplicates.
        function find_duplicate_in_array(arra1) {
            var object = {};
            var result = [];

            arra1.forEach(function (item) {
            if(!object[item])
                object[item] = 0;
                object[item] += 1;
            })
            for (var prop in object) {
            // Lägger värde 4 här eftersom det finns 4 tider.
            if(object[prop] === 7) {
                result.push(prop);
            }
            }
            return result;
        }

        //Använd duplicate-funktionen för att hitta duplikater i arrayOfDates arrayen... och så lägga dublicates i en ny array för att använda den för att disabla dates senare..
        let arrayOfFourDuplDates = find_duplicate_in_array(arrayOfDates);
        arrayOfFourDuplDates.forEach((theDate)=>{
        //Sätt in dublicate-date:n i en array och omvandla samtidigt till ett datum-värde..
        setDuplDatesArray(prev => [...prev, new Date(theDate)]);
        });


        //Används för att se till så att allt laddas klart innan rendering av kalendern.. se kommentar för state:n
        setTimeout(()=>{
        setDuplDatesArrayComplete(true);
        },1000);
    
    }
    

    // useEffect för att kunna köra functionen bara en gång. Bara "[]" som dependency för att köra useEffect:en en gång också "eslint-disable line" kommentaren för att ignorera eslint error.
    useEffect(() => {
      checkIfDateFull();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

      
      



    const success = () => {
      cancelFormFunc();

      document.querySelector(".successMsg").innerHTML = "Thank you for your booking!";
      document.querySelector(".successMsg").style = "color: green";


    }


    const mark = [
        '01-02-2022',
        '02-02-2022',
        '03-02-2022',
        '04-02-2022',
        '07-02-2022',
        '08-02-2022',
        '09-02-2022',
        '10-02-2022',
        '11-02-2022',
        '14-02-2022',
        '15-02-2022',
        '16-02-2022',
        '17-02-2022',
        '18-02-2022',
        '21-02-2022',
        '22-02-2022',
        '23-02-2022',
        '24-02-2022',
        '25-02-2022',
        '28-02-2022',
  
        '01-03-2022',
        '02-03-2022',
        '03-03-2022',
        '04-03-2022',
        '07-03-2022',
        '08-03-2022',
        '09-03-2022',
        '10-03-2022',
        '11-03-2022',
        '12-03-2022',
        '13-03-2022',
        '14-03-2022',
        '15-03-2022',
        '16-03-2022',
        '17-03-2022',
        '18-03-2022',
        '19-03-2022',
        '20-03-2022',
        '21-03-2022',
        '22-03-2022',
        '23-03-2022',
        '24-03-2022',
        '25-03-2022',
        '26-03-2022',
        '27-03-2022',
        '28-03-2022',
        '29-03-2022',
        '30-03-2022',
        '31-03-2022',
  
        '01-04-2022',
        '02-04-2022',
        '03-04-2022',
        '04-04-2022',
        '05-04-2022',
        '06-04-2022',
        '07-04-2022',
        '08-04-2022',
        '09-04-2022',
        '10-04-2022',
        '11-04-2022',
        '12-04-2022',
        '13-04-2022',
        '14-04-2022',
        '15-04-2022',
        '16-04-2022',
        '17-04-2022',
        '18-04-2022',
        '19-04-2022',
        '20-04-2022',
        '21-04-2022',
        '22-04-2022',
        '23-04-2022',
        '24-04-2022',
        '25-04-2022',
        '26-04-2022',
        '27-04-2022',
        '28-04-2022',
        '29-04-2022',
        '30-04-2022',
  
        '01-05-2022',
        '02-05-2022',
        '03-05-2022',
        '04-05-2022',
        '05-05-2022',
        '06-05-2022',
        '07-05-2022',
        '08-05-2022',
        '09-05-2022',
        '10-05-2022',
        '11-05-2022',
        '12-05-2022',
        '13-05-2022',
        '14-05-2022',
        '15-05-2022',
        '16-05-2022',
        '17-05-2022',
        '18-05-2022',
        '19-05-2022',
        '20-05-2022',
        '21-05-2022',
        '22-05-2022',
        '23-05-2022',
        '24-05-2022',
        '25-05-2022',
        '26-05-2022',
        '27-05-2022',
        '28-05-2022',
        '29-05-2022',
        '30-05-2022',
        '31-05-2022',
  
        '01-06-2022',
        '02-06-2022',
        '03-06-2022',
        '04-06-2022',
        '05-06-2022',
        '06-06-2022',
        '07-06-2022',
        '08-06-2022',
        '09-06-2022',
        '10-06-2022',
        '11-06-2022',
        '12-06-2022',
        '13-06-2022',
        '14-06-2022',
        '15-06-2022',
        '16-06-2022',
        '17-06-2022',
        '18-06-2022',
        '19-06-2022',
        '20-06-2022',
        '21-06-2022',
        '22-06-2022',
        '23-06-2022',
        '24-06-2022',
        '25-06-2022',
        '26-06-2022',
        '27-06-2022',
        '28-06-2022',
        '29-06-2022',
        '30-06-2022',
  
        '01-07-2022',
        '02-07-2022',
        '03-07-2022',
        '04-07-2022',
        '05-07-2022',
        '06-07-2022',
        '07-07-2022',
        '08-07-2022',
        '09-07-2022',
        '10-07-2022',
        '11-07-2022',
        '12-07-2022',
        '13-07-2022',
        '14-07-2022',
        '15-07-2022',
        '16-07-2022',
        '17-07-2022',
        '18-07-2022',
        '19-07-2022',
        '20-07-2022',
        '21-07-2022',
        '22-07-2022',
        '23-07-2022',
        '24-07-2022',
        '25-07-2022',
        '26-07-2022',
        '27-07-2022',
        '28-07-2022',
        '29-07-2022',
        '30-07-2022',
        '31-07-2022',
  
        '01-08-2022',
        '02-08-2022',
        '03-08-2022',
        '04-08-2022',
        '05-08-2022',
        '06-08-2022',
        '07-08-2022',
        '08-08-2022',
        '09-08-2022',
        '10-08-2022',
        '11-08-2022',
        '12-08-2022',
        '13-08-2022',
        '14-08-2022',
        '15-08-2022',
        '16-08-2022',
        '17-08-2022',
        '18-08-2022',
        '19-08-2022',
        '20-08-2022',
        '21-08-2022',
        '22-08-2022',
        '23-08-2022',
        '24-08-2022',
        '25-08-2022',
        '26-08-2022',
        '27-08-2022',
        '28-08-2022',
        '29-08-2022',
        '30-08-2022',
        '31-08-2022',
        
        '01-09-2022',
        '02-09-2022',
        '03-09-2022',
        '04-09-2022',
        '05-09-2022',
        '06-09-2022',
        '07-09-2022',
        '08-09-2022',
        '09-09-2022',
        '10-09-2022',
        '11-09-2022',
        '12-09-2022',
        '13-09-2022',
        '14-09-2022',
        '15-09-2022',
        '16-09-2022',
        '17-09-2022',
        '18-09-2022',
        '19-09-2022',
        '20-09-2022',
        '21-09-2022',
        '22-09-2022',
        '23-09-2022',
        '24-09-2022',
        '25-09-2022',
        '26-09-2022',
        '27-09-2022',
        '28-09-2022',
        '29-09-2022',
        '30-09-2022',
  
        '01-10-2022',
        '02-10-2022',
        '03-10-2022',
        '04-10-2022',
        '05-10-2022',
        '06-10-2022',
        '07-10-2022',
        '08-10-2022',
        '09-10-2022',
        '10-10-2022',
        '11-10-2022',
        '12-10-2022',
        '13-10-2022',
        '14-10-2022',
        '15-10-2022',
        '16-10-2022',
        '17-10-2022',
        '18-10-2022',
        '19-10-2022',
        '20-10-2022',
        '21-10-2022',
        '22-10-2022',
        '23-10-2022',
        '24-10-2022',
        '25-10-2022',
        '26-10-2022',
        '27-10-2022',
        '28-10-2022',
        '29-10-2022',
        '30-10-2022',
        '31-10-2022',
  
        '01-11-2022',
        '02-11-2022',
        '03-11-2022',
        '04-11-2022',
        '05-11-2022',
        '06-11-2022',
        '07-11-2022',
        '08-11-2022',
        '09-11-2022',
        '10-11-2022',
        '11-11-2022',
        '12-11-2022',
        '13-11-2022',
        '14-11-2022',
        '15-11-2022',
        '16-11-2022',
        '17-11-2022',
        '18-11-2022',
        '19-11-2022',
        '20-11-2022',
        '21-11-2022',
        '22-11-2022',
        '23-11-2022',
        '24-11-2022',
        '25-11-2022',
        '26-11-2022',
        '27-11-2022',
        '28-11-2022',
        '29-11-2022',
        '30-11-2022',
  
        '01-12-2022',
        '02-12-2022',
        '03-12-2022',
        '04-12-2022',
        '05-12-2022',
        '06-12-2022',
        '07-12-2022',
        '08-12-2022',
        '09-12-2022',
        '10-12-2022',
        '11-12-2022',
        '12-12-2022',
        '13-12-2022',
        '14-12-2022',
        '15-12-2022',
        '16-12-2022',
        '17-12-2022',
        '18-12-2022',
        '19-12-2022',
        '20-12-2022',
        '21-12-2022',
        '22-12-2022',
        '23-12-2022',
        '24-12-2022',
        '25-12-2022',
        '26-12-2022',
        '27-12-2022',
        '28-12-2022',
        '29-12-2022',
        '30-12-2022',
        '31-12-2022',
  
        // 2023
  
        '01-01-2023',
        '02-01-2023',
        '03-01-2023',
        '04-01-2023',
        '05-01-2023',
        '06-01-2023',
        '07-01-2023',
        '08-01-2023',
        '09-01-2023',
        '10-01-2023',
        '11-01-2023',
        '12-01-2023',
        '13-01-2023',
        '14-01-2023',
        '15-01-2023',
        '16-01-2023',
        '17-01-2023',
        '18-01-2023',
        '19-01-2023',
        '20-01-2023',
        '21-01-2023',
        '22-01-2023',
        '23-01-2023',
        '24-01-2023',
        '25-01-2023',
        '26-01-2023',
        '27-01-2023',
        '28-01-2023',
        '29-01-2023',
        '30-01-2023',
        '31-01-2023',
  
        '01-02-2023',
        '02-02-2023',
        '03-02-2023',
        '04-02-2023',
        '05-02-2023',
        '06-02-2023',
        '07-02-2023',
        '08-02-2023',
        '09-02-2023',
        '10-02-2023',
        '11-02-2023',
        '12-02-2023',
        '13-02-2023',
        '14-02-2023',
        '15-02-2023',
        '16-02-2023',
        '17-02-2023',
        '18-02-2023',
        '19-02-2023',
        '20-02-2023',
        '21-02-2023',
        '22-02-2023',
        '23-02-2023',
        '24-02-2023',
        '25-02-2023',
        '26-02-2023',
        '27-02-2023',
        '28-02-2023',
  
        '01-03-2023',
        '02-03-2023',
        '03-03-2023',
        '04-03-2023',
        '05-03-2023',
        '06-03-2023',
        '07-03-2023',
        '08-03-2023',
        '09-03-2023',
        '10-03-2023',
        '11-03-2023',
        '12-03-2023',
        '13-03-2023',
        '14-03-2023',
        '15-03-2023',
        '16-03-2023',
        '17-03-2023',
        '18-03-2023',
        '19-03-2023',
        '20-03-2023',
        '21-03-2023',
        '22-03-2023',
        '23-03-2023',
        '24-03-2023',
        '25-03-2023',
        '26-03-2023',
        '27-03-2023',
        '28-03-2023',
        '29-03-2023',
        '30-03-2023',
        '31-03-2023',
  
        '01-04-2023',
        '02-04-2023',
        '03-04-2023',
        '04-04-2023',
        '05-04-2023',
        '06-04-2023',
        '07-04-2023',
        '08-04-2023',
        '09-04-2023',
        '10-04-2023',
        '11-04-2023',
        '12-04-2023',
        '13-04-2023',
        '14-04-2023',
        '15-04-2023',
        '16-04-2023',
        '17-04-2023',
        '18-04-2023',
        '19-04-2023',
        '20-04-2023',
        '21-04-2023',
        '22-04-2023',
        '23-04-2023',
        '24-04-2023',
        '25-04-2023',
        '26-04-2023',
        '27-04-2023',
        '28-04-2023',
        '29-04-2023',
        '30-04-2023',
  
        '01-05-2023',
        '02-05-2023',
        '03-05-2023',
        '04-05-2023',
        '05-05-2023',
        '06-05-2023',
        '07-05-2023',
        '08-05-2023',
        '09-05-2023',
        '10-05-2023',
        '11-05-2023',
        '12-05-2023',
        '13-05-2023',
        '14-05-2023',
        '15-05-2023',
        '16-05-2023',
        '17-05-2023',
        '18-05-2023',
        '19-05-2023',
        '20-05-2023',
        '21-05-2023',
        '22-05-2023',
        '23-05-2023',
        '24-05-2023',
        '25-05-2023',
        '26-05-2023',
        '27-05-2023',
        '28-05-2023',
        '29-05-2023',
        '30-05-2023',
        '31-05-2023',
  
        '01-06-2023',
        '02-06-2023',
        '03-06-2023',
        '04-06-2023',
        '05-06-2023',
        '06-06-2023',
        '07-06-2023',
        '08-06-2023',
        '09-06-2023',
        '10-06-2023',
        '11-06-2023',
        '12-06-2023',
        '13-06-2023',
        '14-06-2023',
        '15-06-2023',
        '16-06-2023',
        '17-06-2023',
        '18-06-2023',
        '19-06-2023',
        '20-06-2023',
        '21-06-2023',
        '22-06-2023',
        '23-06-2023',
        '24-06-2023',
        '25-06-2023',
        '26-06-2023',
        '27-06-2023',
        '28-06-2023',
        '29-06-2023',
        '30-06-2023',
  
        '01-07-2023',
        '02-07-2023',
        '03-07-2023',
        '04-07-2023',
        '05-07-2023',
        '06-07-2023',
        '07-07-2023',
        '08-07-2023',
        '09-07-2023',
        '10-07-2023',
        '11-07-2023',
        '12-07-2023',
        '13-07-2023',
        '14-07-2023',
        '15-07-2023',
        '16-07-2023',
        '17-07-2023',
        '18-07-2023',
        '19-07-2023',
        '20-07-2023',
        '21-07-2023',
        '22-07-2023',
        '23-07-2023',
        '24-07-2023',
        '25-07-2023',
        '26-07-2023',
        '27-07-2023',
        '28-07-2023',
        '29-07-2023',
        '30-07-2023',
        '31-07-2023',
  
        '01-08-2023',
        '02-08-2023',
        '03-08-2023',
        '04-08-2023',
        '05-08-2023',
        '06-08-2023',
        '07-08-2023',
        '08-08-2023',
        '09-08-2023',
        '10-08-2023',
        '11-08-2023',
        '12-08-2023',
        '13-08-2023',
        '14-08-2023',
        '15-08-2023',
        '16-08-2023',
        '17-08-2023',
        '18-08-2023',
        '19-08-2023',
        '20-08-2023',
        '21-08-2023',
        '22-08-2023',
        '23-08-2023',
        '24-08-2023',
        '25-08-2023',
        '26-08-2023',
        '27-08-2023',
        '28-08-2023',
        '29-08-2023',
        '30-08-2023',
        '31-08-2023',
        
        '01-09-2023',
        '02-09-2023',
        '03-09-2023',
        '04-09-2023',
        '05-09-2023',
        '06-09-2023',
        '07-09-2023',
        '08-09-2023',
        '09-09-2023',
        '10-09-2023',
        '11-09-2023',
        '12-09-2023',
        '13-09-2023',
        '14-09-2023',
        '15-09-2023',
        '16-09-2023',
        '17-09-2023',
        '18-09-2023',
        '19-09-2023',
        '20-09-2023',
        '21-09-2023',
        '22-09-2023',
        '23-09-2023',
        '24-09-2023',
        '25-09-2023',
        '26-09-2023',
        '27-09-2023',
        '28-09-2023',
        '29-09-2023',
        '30-09-2023',
  
        '01-10-2023',
        '02-10-2023',
        '03-10-2023',
        '04-10-2023',
        '05-10-2023',
        '06-10-2023',
        '07-10-2023',
        '08-10-2023',
        '09-10-2023',
        '10-10-2023',
        '11-10-2023',
        '12-10-2023',
        '13-10-2023',
        '14-10-2023',
        '15-10-2023',
        '16-10-2023',
        '17-10-2023',
        '18-10-2023',
        '19-10-2023',
        '20-10-2023',
        '21-10-2023',
        '22-10-2023',
        '23-10-2023',
        '24-10-2023',
        '25-10-2023',
        '26-10-2023',
        '27-10-2023',
        '28-10-2023',
        '29-10-2023',
        '30-10-2023',
        '31-10-2023',
  
        '01-11-2023',
        '02-11-2023',
        '03-11-2023',
        '04-11-2023',
        '05-11-2023',
        '06-11-2023',
        '07-11-2023',
        '08-11-2023',
        '09-11-2023',
        '10-11-2023',
        '11-11-2023',
        '12-11-2023',
        '13-11-2023',
        '14-11-2023',
        '15-11-2023',
        '16-11-2023',
        '17-11-2023',
        '18-11-2023',
        '19-11-2023',
        '20-11-2023',
        '21-11-2023',
        '22-11-2023',
        '23-11-2023',
        '24-11-2023',
        '25-11-2023',
        '26-11-2023',
        '27-11-2023',
        '28-11-2023',
        '29-11-2023',
        '30-11-2023',
  
        '01-12-2023',
        '02-12-2023',
        '03-12-2023',
        '04-12-2023',
        '05-12-2023',
        '06-12-2023',
        '07-12-2023',
        '08-12-2023',
        '09-12-2023',
        '10-12-2023',
        '11-12-2023',
        '12-12-2023',
        '13-12-2023',
        '14-12-2023',
        '15-12-2023',
        '16-12-2023',
        '17-12-2023',
        '18-12-2023',
        '19-12-2023',
        '20-12-2023',
        '21-12-2023',
        '22-12-2023',
        '23-12-2023',
        '24-12-2023',
        '25-12-2023',
        '26-12-2023',
        '27-12-2023',
        '28-12-2023',
        '29-12-2023',
        '30-12-2023',
        '31-12-2023',
    ]

    
  
    return (

      <div>
            {duplDatesArray && duplDatesArrayComplete && 
            <Calendar 

                onChange={onChange} 

                onClickDay={(value) => {
                    onChange(value);
                    openForm();
                    }} 

                minDate={new Date()}  

                value={value} 
                
                tileDisabled={({date, view}) =>
                    (view === 'month') && // Block day tiles only
                    duplDatesArray.some(disabledDate =>
                    date.getFullYear() === disabledDate.getFullYear() &&
                    date.getMonth() === disabledDate.getMonth() &&
                    date.getDate() === disabledDate.getDate()
                )} 

                tileClassName={({ date, view }) => {
                    if (mark.find( x => x === moment(date).format("DD-MM-YYYY"))){
                    return  'highlight'
                    }
                }}
            />
            }
                

                {formState && <Exampleform dayValue={value.toLocaleDateString('sv-SE')} cancelForm={cancelFormFunc}  addBooking={addToDb}  showSuccess={success} />}
             
      </div>
     
    );
  }

export default CalendarComp;