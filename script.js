
window.addEventListener("load", async () => {
    request = await fetch("./projects.json")
    projects = await request.json()
    list = document.getElementById("projects")
    list.innerHTML = ""
    for (var project in projects) {
        project = [projects[project], document.createElement("a")]
        project[1].innerHTML = `
            <div class="title">${project[0].name}</div>
            <div class="description">${project[0].description}</div>
        `
        project[1].href = `https://github.com/NanoPetaByte/${project[0].name.toLowerCase()}`
        project[1].target = "_blank"
        list.appendChild(project[1])
    }
})