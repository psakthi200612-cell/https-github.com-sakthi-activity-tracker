// Activity Data (Array)

let activities = [

    { name: "HTML Practice", completed: false },

    { name: "CSS Styling", completed: false },

    { name: "JavaScript Learning", completed: false },

    { name: "Project Work", completed: false }

];

// Load Activities

function loadActivities() {

    let list = document.getElementById("activityList");

    list.innerHTML = "";

    activities.forEach((activity, index) => {

        let li = document.createElement("li");

        li.innerHTML = `

            ${activity.name} - 

            ${activity.completed ? "Completed" : "Pending"}

            <button onclick="markComplete(${index})">Complete</button>

        `;

        list.appendChild(li);

    });

    updateProgress();

}

// Mark Activity Completed

function markComplete(index) {

    activities[index].completed = true;

    loadActivities();

}

// Update Progress

function updateProgress() {

    let completedCount = activities.filter(a => a.completed).length;

    let total = activities.length;

    document.getElementById("progress").innerText =

        `${completedCount} out of ${total} completed`;

}

// Initial Load

loadActivities();