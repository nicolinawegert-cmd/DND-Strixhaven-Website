fetch("npcs/npc-data.json")
  .then(response => response.json())
  .then(npcs => {
    const container = document.getElementById("npc-container");

    npcs.forEach(npc => {
      const card = document.createElement("div");
      card.className = "npc-card";
      card.innerHTML = `
        <img src="${npc.image}" alt="${npc.name}">
        <h3>${npc.name}</h3>
        <p><strong>${npc.role}</strong></p>
        <p>${npc.description}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading NPC data:", error));
