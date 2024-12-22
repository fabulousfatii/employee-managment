const data = [
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Prepare Monthly Report",
        "taskDescription": "Compile and submit the monthly financial report.",
        "taskDate": "2024-11-25",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "email": "johndoe@example.com",
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly team meeting.",
        "taskDate": "2024-11-22",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "email": "johndoe@example.com",
      },
      {
        "taskTitle": "Client Follow-Up",
        "taskDescription": "Follow up with clients on project updates.",
        "taskDate": "2024-11-20",
        "category": "Client Relations",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "email": "johndoe@example.com",
      }
    ]
  },
  {
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 0,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "System Maintenance",
        "taskDescription": "Perform system checks and updates.",
        "taskDate": "2024-11-23",
        "category": "IT",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "email": "janesmith@example.com"
      },
      {
        "taskTitle": "Budget Planning",
        "taskDescription": "Draft budget plans for the upcoming quarter.",
        "taskDate": "2024-11-26",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "email": "janesmith@example.com"
      }
    ]
  },
  {
    "name": "Alice Johnson",
    "email": "alicejohnson@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Update Website",
        "taskDescription": "Add new content to the company website.",
        "taskDate": "2024-11-24",
        "category": "Web Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "email": "alicejohnson@example.com"
      },
      {
        "taskTitle": "Organize Workshop",
        "taskDescription": "Plan and organize a training workshop.",
        "taskDate": "2024-11-27",
        "category": "Training",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "email": "alicejohnson@example.com"
      }
    ]
  },
  {
    "name": "Bob Brown",
    "email": "bobbrown@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Draft Proposal",
        "taskDescription": "Write a proposal for the new project.",
        "taskDate": "2024-11-25",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "email": "bobbrown@example.com"
      },
      {
        "taskTitle": "Database Backup",
        "taskDescription": "Ensure the database is backed up.",
        "taskDate": "2024-11-21",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "email": "bobbrown@example.com"

      }
    ]
  },
  {
    "name": "Charlie White",
    "email": "charliewhite@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Inventory Check",
        "taskDescription": "Conduct an inventory check for supplies.",
        "taskDate": "2024-11-22",
        "category": "Logistics",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "email": "charliewhite@example.com"
      },
      {
        "taskTitle": "Employee Feedback",
        "taskDescription": "Collect feedback from team members.",
        "taskDate": "2024-11-20",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "email": "charliewhite@example.com"
      }
    ]
  }
]



  const admindata = [
    {
      "id": "admin123",
      "email": "admin@example.com",
      "password": "admin123"
    }
  ]

  export const setlocalstorage = ()=>{
    localStorage.setItem("data", JSON.stringify(data));
    //localStorage.setItem("admin",JSON.stringify(admin))
    localStorage.setItem("admindata",JSON.stringify(admindata))

  }
  export const getlocalstorage = ()=>{
    const employee = JSON.parse(localStorage.getItem("data"))
    const admin = JSON.parse(localStorage.getItem("admindata"))

    //console.log(employee);
    //console.log(admin);
    

    return{ employee, admin}
    
  }
