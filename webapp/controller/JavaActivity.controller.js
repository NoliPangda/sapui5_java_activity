sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sapui5javaactivity.controller.JavaActivity", {

            setOutput: function (text) {
                this.byId("textAreaOutput").setValue(text + "\n");
            },
        
            onConvert: function () {
                const number = parseInt(this.byId("inputNumber").getValue());
                if (isNaN(number) || number < 1 || number > 999) {
                this.setOutput("Please enter a number between 1 and 999.");
                return;
                }
        
                const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
                const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
                               "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
                const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        
                let words = " ";
                const hundred = Math.floor(number / 100);
                const remainder = number % 100;
        
                if (hundred > 0) {
                words += ones[hundred] + " Hundred ";
                }
        
                if (remainder >= 10 && remainder < 20) {
                words += teens[remainder - 10];
                } else {
                const ten = Math.floor(remainder / 10);
                const one = remainder % 10;
                words += tens[ten] + (ten && one ? " " : " ") + ones[one];
                }
        
                this.setOutput(words.trim());
            },
        
            onPrintPattern: function () {
                const height = parseInt(this.byId("inputHeight").getValue());
                if (isNaN(height) || height <= 0) {
                this.setOutput("Please enter a valid height.");
                return;
                }
        
                let pattern = " ";
                for (let i = 0; i < height; i++) {
                pattern += " ".repeat(i * 2) + "* ".repeat(height - i).trim() + "\n";
                }
        
                this.setOutput(pattern.trim());
            },
        
            onPrintXPattern: function () {
                const height = parseInt(this.byId("inputXHeight").getValue());
                if (isNaN(height) || height <= 0 || height % 2 === 0) {
                this.setOutput("Please enter a valid odd height.");
                return;
                }
        
                let pattern = " ";
                for (let i = 0; i < height; i++) {
                let line = "";
                for (let j = 0; j < height; j++) {
                    line += (j === i || j === height - i - 1) ? "* " : "  ";
                }
                pattern += line.trimEnd() + "\n";
                }
        
                this.setOutput(pattern.trim());
            },
        
            onCalculatePerimeter: function () {
                const a = parseFloat(this.byId("sideA").getValue());
                const b = parseFloat(this.byId("sideB").getValue());
                const c = parseFloat(this.byId("sideC").getValue());
        
                if (isNaN(a) || isNaN(b) || isNaN(c)) {
                this.setOutput("Enter valid numbers for all triangle sides.");
                return;
                }
        
                if (a + b <= c || a + c <= b || b + c <= a) {
                this.setOutput("Invalid triangle sides. Sum of any two must be greater than the third.");
                return;
                }
        
                const perimeter = a + b + c;
                this.setOutput("Perimeter: " + perimeter);
            },
        
            onShowColorChoices: function () {
                const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
                const o = ["th", "st", "nd", "rd"];
        
                let result = " ";
        
                for (let i = 0; i < color.length; i++) {
                let suffix = "th";
                const num = i + 1;
        
                if (!(num >= 11 && num <= 13)) {
                    if (num % 10 === 1) suffix = o[1];
                    else if (num % 10 === 2) suffix = o[2];
                    else if (num % 10 === 3) suffix = o[3];
                }
        
                result += `${num}${suffix} choice is ${color[i]}.\n`;
                }
        
                this.setOutput(result.trim());
            },
        
            onFindMostSkilled: function () {
                const record = [{
                "Name": "Gibo", "Age": 16, "SkillSet": [{ "Skill": "SAP UI5" }, { "Skill": "SAP HANA" }]
                }, {
                "Name": "Patrick", "Age": 22,
                "SkillSet": [{ "Skill": "SAP UI5" }, { "Skill": "SAP HANA" }, { "Skill": "SAP ABAP" }]
                }, {
                "Name": "MJ", "Age": 24, "SkillSet": [{ "Skill": "SAP HANA" }]
                }];
        
                let maxSkills = 0;
                let person = null;
        
                for (let i = 0; i < record.length; i++) {
                const count = record[i].SkillSet.length;
                if (count > maxSkills) {
                    maxSkills = count;
                    person = record[i];
                }
                }
        
                if (person) {
                this.setOutput(`Most Skilled Person:\nName: ${person.Name}\nAge: ${person.Age}`);
                } else {
                this.setOutput("No records found.");
                }
            }
    });
});