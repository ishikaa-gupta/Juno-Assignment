const data = [
  {
    "User": "Sam Altman",
    "Email": "samaltman2234@gmail.com",
    "Risk Level": "Medium",
    "Trigger Reason": "IP Change",
    "In Queue For": "4 Days",
    "Date Added On": "15 Oct, 2023",
    "Previously Reviewed": "Yes",
    "Review Date": "23 Aug, 2023"
  },
  {
    "User": "Sameer Choubay",
    "Email": "sameerchoubay@gmail.com",
    "Risk Level": "High",
    "Trigger Reason": "FIFO",
    "In Queue For": "4 Days",
    "Date Added On": "15 Oct, 2023",
    "Previously Reviewed": "No",
    "Review Date": ""
  },
  {
    "User": "John Doe",
    "Email": "johndoe@gmail.com",
    "Risk Level": "Low",
    "Trigger Reason": "User Action",
    "In Queue For": "2 Days",
    "Date Added On": "16 Oct, 2023",
    "Previously Reviewed": "Yes",
    "Review Date": "20 Aug, 2023"
  },
  {
    "User": "Jane Smith",
    "Email": "janesmith@gmail.com",
    "Risk Level": "Medium",
    "Trigger Reason": "Data Anomaly",
    "In Queue For": "5 Days",
    "Date Added On": "17 Oct, 2023",
    "Previously Reviewed": "No",
    "Review Date": ""
  },
  {
    "User": "Bob Johnson",
    "Email": "bobjohnson@gmail.com",
    "Risk Level": "High",
    "Trigger Reason": "Unauthorized Access",
    "In Queue For": "3 Days",
    "Date Added On": "18 Oct, 2023",
    "Previously Reviewed": "Yes",
    "Review Date": "22 Aug, 2023"
  },
  {
    "User": "Alice Williams",
    "Email": "alicewilliams@gmail.com",
    "Risk Level": "Low",
    "Trigger Reason": "Configuration Change",
    "In Queue For": "1 Day",
    "Date Added On": "19 Oct, 2023",
    "Previously Reviewed": "No",
    "Review Date": ""
  },
  {
    "User": "Charlie Brown",
    "Email": "charliebrown@gmail.com",
    "Risk Level": "Medium",
    "Trigger Reason": "Malware Detection",
    "In Queue For": "6 Days",
    "Date Added On": "20 Oct, 2023",
    "Previously Reviewed": "Yes",
    "Review Date": "19 Aug, 2023"
  },
  {
    "User": "Eve Robinson",
    "Email": "everobinson@gmail.com",
    "Risk Level": "High",
    "Trigger Reason": "Security Breach",
    "In Queue For": "5 Days",
    "Date Added On": "21 Oct, 2023",
    "Previously Reviewed": "No",
    "Review Date": ""
  },
  {
    "User": "Frank Miller",
    "Email": "frankmiller@gmail.com",
    "Risk Level": "Low",
    "Trigger Reason": "Device Compromise",
    "In Queue For": "2 Days",
    "Date Added On": "22 Oct, 2023",
    "Previously Reviewed": "Yes",
    "Review Date": "18 Aug, 2023"
  },
  {
    "User": "Grace Thompson",
    "Email": "gracethompson@gmail.com",
    "Risk Level": "Medium",
    "Trigger Reason": "Phishing Attempt",
    "In Queue For": "3 Days",
    "Date Added On": "23 Oct, 2023",
    "Previously Reviewed": "No",
    "Review Date": ""
  },
  {
    "User": "Harry Anderson",
    "Email": "harryanderson@gmail.com",
    "Risk Level": "High",
    "Trigger Reason": "Insider Threat",
    "In Queue For": "4 Days",
    "Date Added On": "24 Oct, 2023",
    "Previously Reviewed": "Yes",
    "Review Date": "17 Aug, 2023"
  },
  {
    "User": "Isabel Davis",
    "Email": "isabeldavis@gmail.com",
    "Risk Level": "Low",
    "Trigger Reason": "Policy Violation",
    "In Queue For": "1 Day",
    "Date Added On": "25 Oct, 2023",
    "Previously Reviewed": "No",
    "Review Date": ""
  },
  {
    "User": "Jack White",
    "Email": "jackwhite@gmail.com",
    "Risk Level": "Medium",
    "Trigger Reason": "Unusual Network Activity",
    "In Queue For": "5 Days",
    "Date Added On": "26 Oct, 2023",
    "Previously Reviewed": "Yes",
    "Review Date": "16 Aug, 2023"
  },
  {
    "User": "Kelly Brown",
    "Email": "kellybrown@gmail.com",
    "Risk Level": "High",
    "Trigger Reason": "Data Exfiltration",
    "In Queue For": "3 Days",
    "Date Added On": "27 Oct, 2023",
    "Previously Reviewed": "No",
    "Review Date": ""
  },
  {
    "User": "Leo Rodriguez",
    "Email": "leorodriguez@gmail.com",
    "Risk Level": "Low",
    "Trigger Reason": "System Downtime",
    "In Queue For": "2 Days",
    "Date Added On": "28 Oct, 2023",
    "Previously Reviewed": "Yes",
    "Review Date": "21 Aug, 2023"
  }
];


renderUserList(data);

function renderUserList(data) {
  const userListContainer = document.getElementById('user-list-container');

  data.forEach(user => {
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');

    Object.keys(user).forEach(attribute => {
      const attributeValue = user[attribute];

      if (attribute === 'Email' || attribute === 'Review Date') {
        return;
      }

      if (attribute === 'User' || attribute === 'Previously Reviewed') {
        const subDiv = document.createElement('div');
        subDiv.textContent = attributeValue;

        if (attribute === 'User') {
          const emailSubDiv = document.createElement('div');
          emailSubDiv.textContent = user['Email'];
          subDiv.appendChild(emailSubDiv);
        }

        if (attribute === 'Previously Reviewed') {
          const reviewDateSubDiv = document.createElement('div');
          reviewDateSubDiv.textContent = user['Review Date'];
          subDiv.appendChild(reviewDateSubDiv);
        }

        userContainer.appendChild(subDiv);
      }
      else if (attribute === 'Risk Level') {
        const riskLevelDiv = document.createElement('div');
        riskLevelDiv.textContent = attributeValue;
        riskLevelDiv.classList.add('risk-level');
        riskLevelDiv.setAttribute('data-risk', attributeValue);
        userContainer.appendChild(riskLevelDiv);
      }
      else {
        const subDiv = document.createElement('div');
        subDiv.textContent = attributeValue;
        userContainer.appendChild(subDiv);
      }
    });

    userListContainer.appendChild(userContainer);
  });
}
