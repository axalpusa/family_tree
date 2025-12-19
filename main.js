const familyData = {
    "leonila": {
        name: "Leonila Chiroque Anastasio",
        relation: "Maternal Grandmother",
        age: "Approximately 80 years",
        status: "Widowed, mother of Maritza",
        description: "She is my maternal grandmother. She is older than my parents. She is very traditional and loves family gatherings.",
        likes: ["cooking traditional food", "family visits", "telling stories"],
        dislikes: ["modern technology", "fast food", "loud music"],
        skills: "She is cooking delicious traditional meals. She is telling interesting stories about the past.",
        feelings: "She is feeling happy when the family visits. She is missing her husband. She is proud of her daughter and grandchildren.",
        icon: "fas fa-female",
        color: "#2c5282",
        connections: [
            { type: "child", name: "Maritza Salazar Chiroque", relation: "Daughter" },
            { type: "spouse", name: "Unknown", relation: "Deceased Husband" }
        ]
    },
    "jose": {
        name: "José Manuel Puertas Rondoy",
        relation: "My Father",
        age: "50 years (born 1974)",
        status: "Married to Maritza since many years",
        description: "My father is 50 years old. He is younger than my mother. He is hardworking and responsible. He is calmer than my mother.",
        likes: ["fishing on weekends", "watching sports", "spending time with family"],
        dislikes: ["loud noises", "disorganization", "wasting money"],
        skills: "He is fixing things around the house. He is cooking on weekends. He is working as an administrator.",
        feelings: "He is feeling proud of his children. He is happy with his marriage. He is sometimes tired from work.",
        icon: "fas fa-male",
        color: "#4c8bf5",
        connections: [
            { type: "spouse", name: "Maritza Salazar Chiroque", relation: "Wife" },
            { type: "child", name: "Eyllin María Puertas Salazar", relation: "Daughter" },
            { type: "child", name: "Axel Alexandre Puertas Salazar", relation: "Son" },
            { type: "child", name: "Diego Stefano Puertas Salazar", relation: "Son" },
            { type: "child", name: "Ashlly Tatiana Puertas Salazar", relation: "Daughter" }
        ]
    },
    "maritza": {
        name: "Maritza Salazar Chiroque",
        relation: "My Mother",
        age: "57 years (born 1967)",
        status: "Married to José, daughter of Leonila",
        description: "My mother is 57 years old. She is older than my father. She is more talkative than my father. She is very caring and organized.",
        likes: ["gardening", "cooking for the family", "organizing events"],
        dislikes: ["messiness", "disrespect", "being late"],
        skills: "She is managing the household. She is gardening beautifully. She is cooking amazing meals every day.",
        feelings: "She is feeling happy when the family is together. She is worried about her children sometimes. She is loving her role as a grandmother.",
        icon: "fas fa-female",
        color: "#4c8bf5",
        connections: [
            { type: "spouse", name: "José Manuel Puertas Rondoy", relation: "Husband" },
            { type: "parent", name: "Leonila Chiroque Anastasio", relation: "Mother" },
            { type: "parent", name: "Unknown", relation: "Deceased Father" },
            { type: "child", name: "Eyllin María Puertas Salazar", relation: "Daughter" },
            { type: "child", name: "Axel Alexandre Puertas Salazar", relation: "Son" },
            { type: "child", name: "Diego Stefano Puertas Salazar", relation: "Son" },
            { type: "child", name: "Ashlly Tatiana Puertas Salazar", relation: "Daughter" }
        ]
    },
    "eyllin": {
        name: "Eyllin María Puertas Salazar",
        relation: "My Eldest Sister",
        age: "33 years (born 1991)",
        status: "Separated, has one son named Neythan (4 months old)",
        description: "Eyllin is 33 years old. She is the eldest sibling. She is more responsible than me. She is a loving mother.",
        likes: ["taking care of her baby", "family time", "watching movies"],
        dislikes: ["stress", "irresponsibility", "bad weather"],
        skills: "She is taking care of her baby. She is working from home. She is organizing family events.",
        feelings: "She is feeling tired but happy as a new mother. She is loving her son very much. She is adjusting to life as a single mother.",
        icon: "fas fa-female",
        color: "#2c5282",
        connections: [
            { type: "parent", name: "José Manuel Puertas Rondoy", relation: "Father" },
            { type: "parent", name: "Maritza Salazar Chiroque", relation: "Mother" },
            { type: "child", name: "Neythan", relation: "Son" },
            { type: "ex", name: "Unknown", relation: "Ex-partner (Father of Neythan)" }
        ]
    },
    "axel": {
        name: "Axel Alexandre Puertas Salazar",
        relation: "Myself",
        age: "30 years (born 1994)",
        status: "Single, no children",
        description: "I am 30 years old. I am younger than Eyllin but older than Diego and Ashlly. I am more interested in technology than my siblings. I am quieter than my sisters.",
        likes: ["learning about technology", "watching documentaries", "spending time with family"],
        dislikes: ["monotony", "loud parties", "hot weather"],
        skills: "I am studying web development. I am speaking English. I am helping my family with technology problems.",
        feelings: "I am feeling motivated about my studies. I am happy with my family. I am excited about the future.",
        icon: "fas fa-user",
        color: "#4c8bf5",
        connections: [
            { type: "parent", name: "José Manuel Puertas Rondoy", relation: "Father" },
            { type: "parent", name: "Maritza Salazar Chiroque", relation: "Mother" },
            { type: "sibling", name: "Eyllin María Puertas Salazar", relation: "Elder Sister" },
            { type: "sibling", name: "Diego Stefano Puertas Salazar", relation: "Younger Brother" },
            { type: "sibling", name: "Ashlly Tatiana Puertas Salazar", relation: "Younger Sister" }
        ]
    },
    "diego": {
        name: "Diego Stefano Puertas Salazar",
        relation: "My Brother",
        age: "27 years (born 1997)",
        status: "Separated from two women, has two children from different mothers",
        description: "Diego is 27 years old. He is younger than me but older than Ashlly. He is more outgoing than me. He is a caring father to his children.",
        likes: ["playing sports", "spending time with his children", "watching football"],
        dislikes: ["drama", "dishonesty", "waking up early"],
        skills: "He is working in sales. He is playing football on weekends. He is visiting his children when possible.",
        feelings: "He is feeling happy when he sees his children. He is sometimes stressed about work. He is trying to be a good father.",
        icon: "fas fa-male",
        color: "#2c5282",
        connections: [
            { type: "parent", name: "José Manuel Puertas Rondoy", relation: "Father" },
            { type: "parent", name: "Maritza Salazar Chiroque", relation: "Mother" },
            { type: "child", name: "Greyshel", relation: "Daughter (Lives in Ecuador)" },
            { type: "child", name: "Pedro", relation: "Son (Lives in Piura)" },
            { type: "ex", name: "Unknown", relation: "Ex-partner (Mother of Greyshel)" },
            { type: "ex", name: "Unknown", relation: "Ex-partner (Mother of Pedro)" }
        ]
    },
    "ashlly": {
        name: "Ashlly Tatiana Puertas Salazar",
        relation: "My Youngest Sister",
        age: "20 years (born 2004)",
        status: "In a relationship with Ricardo, not married",
        description: "Ashlly is 20 years old. She is the youngest in our family. She is studying law and working as an English teacher. She is more organized than me.",
        likes: ["studying law", "teaching English", "spending time with Ricardo"],
        dislikes: ["injustice", "laziness", "wasting time"],
        skills: "She is studying law at university. She is teaching English to students. She is organizing her time very well.",
        feelings: "She is feeling busy with studies and work. She is happy in her relationship with Ricardo. She is excited about her future career.",
        icon: "fas fa-female",
        color: "#4c8bf5",
        connections: [
            { type: "parent", name: "José Manuel Puertas Rondoy", relation: "Father" },
            { type: "parent", name: "Maritza Salazar Chiroque", relation: "Mother" },
            { type: "partner", name: "Ricardo", relation: "Boyfriend" }
        ]
    },
    "greyshel": {
        name: "Greyshel",
        relation: "Diego's Daughter",
        age: "7-8 years old",
        status: "Lives in Ecuador with her mother",
        description: "Greyshel is Diego's daughter. She is 7 or 8 years old. She lives in Ecuador with her mother. She is growing up fast.",
        likes: ["playing with friends", "drawing", "watching cartoons"],
        dislikes: ["homework", "bedtime", "vegetables"],
        skills: "She is learning in school. She is drawing beautiful pictures. She is speaking Spanish.",
        feelings: "She is feeling happy when she visits her father. She is missing her father when he is not there.",
        icon: "fas fa-child",
        color: "#2c5282",
        connections: [
            { type: "parent", name: "Diego Stefano Puertas Salazar", relation: "Father" },
            { type: "parent", name: "Unknown", relation: "Mother (Ex-partner of Diego)" },
            { type: "grandparent", name: "José Manuel Puertas Rondoy", relation: "Grandfather" },
            { type: "grandparent", name: "Maritza Salazar Chiroque", relation: "Grandmother" }
        ]
    },
    "pedro": {
        name: "Pedro",
        relation: "Diego's Son",
        age: "1 year old",
        status: "Lives in Piura with his mother",
        description: "Pedro is Diego's son. He is 1 year old. He lives in Piura with his mother. He is just starting to walk.",
        likes: ["playing with toys", "being carried", "bath time"],
        dislikes: ["being hungry", "loud noises", "teething pain"],
        skills: "He is learning to walk. He is making baby sounds. He is recognizing family members.",
        feelings: "He is feeling curious about everything. He is happy when he sees his father.",
        icon: "fas fa-child",
        color: "#2c5282",
        connections: [
            { type: "parent", name: "Diego Stefano Puertas Salazar", relation: "Father" },
            { type: "parent", name: "Unknown", relation: "Mother (Ex-partner of Diego)" },
            { type: "grandparent", name: "José Manuel Puertas Rondoy", relation: "Grandfather" },
            { type: "grandparent", name: "Maritza Salazar Chiroque", relation: "Grandmother" }
        ]
    },
    "neythan": {
        name: "Neythan",
        relation: "Eyllin's Son",
        age: "4 months old",
        status: "Lives with his mother Eyllin",
        description: "Neythan is Eyllin's son. He is 4 months old. He is the youngest member of our family. He is growing every day.",
        likes: ["milk", "sleeping", "being held"],
        dislikes: ["being wet", "hunger", "loud sounds"],
        skills: "He is learning to smile. He is recognizing his mother's voice. He is holding his head up.",
        feelings: "He is feeling comfortable with his mother. He is curious about the world around him.",
        icon: "fas fa-baby",
        color: "#2c5282",
        connections: [
            { type: "parent", name: "Eyllin María Puertas Salazar", relation: "Mother" },
            { type: "parent", name: "Unknown", relation: "Father (Ex-partner of Eyllin)" },
            { type: "grandparent", name: "José Manuel Puertas Rondoy", relation: "Grandfather" },
            { type: "grandparent", name: "Maritza Salazar Chiroque", relation: "Grandmother" }
        ]
    },
    "ricardo": {
        name: "Ricardo",
        relation: "Ashlly's Boyfriend",
        age: "Approximately 25-30 years",
        status: "In a relationship with Ashlly, not married",
        description: "Ricardo is Ashlly's boyfriend. He is a mathematics teacher and also works as an oil engineer. He is intelligent and hardworking.",
        likes: ["teaching mathematics", "engineering projects", "spending time with Ashlly"],
        dislikes: ["laziness", "bad grades", "inefficiency"],
        skills: "He is teaching mathematics to students. He is working as an oil engineer. He is solving complex problems.",
        feelings: "He is feeling happy with Ashlly. He is busy with work and teaching. He is serious about his career.",
        icon: "fas fa-user-tie",
        color: "#4c8bf5",
        connections: [
            { type: "partner", name: "Ashlly Tatiana Puertas Salazar", relation: "Girlfriend" }
        ]
    }
};

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const modal = document.getElementById('memberModal');
    const modalClose = document.getElementById('modalClose');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalName = document.getElementById('modalName');
    const modalRelation = document.getElementById('modalRelation');
    const modalAge = document.getElementById('modalAge');
    const modalStatus = document.getElementById('modalStatus');
    const modalBody = document.getElementById('modalBody');
    const treeMembers = document.querySelectorAll('.tree-member[data-member]');
    
    // Mostrar modal al hacer clic en un miembro
    treeMembers.forEach(member => {
        member.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member');
            showMemberModal(memberId);
            
            // Resaltar conexiones
            highlightConnections(memberId);
        });
    });
    
    // Cerrar modal
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        clearHighlights();
    });
    
    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            clearHighlights();
        }
    });
    
    // Función para mostrar modal
    function showMemberModal(memberId) {
        const member = familyData[memberId];
        if (!member) return;
        
        // Actualizar información del modal
        modalPhoto.innerHTML = `<i class="${member.icon}"></i>`;
        modalPhoto.style.borderColor = member.color;
        modalName.textContent = member.name;
        modalRelation.textContent = member.relation;
        modalAge.textContent = member.age;
        modalStatus.textContent = member.status;
        
        // Crear contenido del modal
        const likesHTML = member.likes ? member.likes.map(like => `<span class="like">${like}</span>`).join('') : '';
        const dislikesHTML = member.dislikes ? member.dislikes.map(dislike => `<span class="dislike">${dislike}</span>`).join('') : '';
        
        // Crear conexiones
        let connectionsHTML = '';
        if (member.connections && member.connections.length > 0) {
            connectionsHTML = `
                <div class="family-connections">
                    ${member.connections.map(conn => {
                        let icon = 'fas fa-user';
                        if (conn.type === 'parent') icon = 'fas fa-arrow-up';
                        if (conn.type === 'child') icon = 'fas fa-arrow-down';
                        if (conn.type === 'spouse') icon = 'fas fa-heart';
                        if (conn.type === 'sibling') icon = 'fas fa-users';
                        if (conn.type === 'ex') icon = 'fas fa-times';
                        if (conn.type === 'partner') icon = 'fas fa-heart';
                        if (conn.type === 'grandparent') icon = 'fas fa-arrow-up';
                        
                        return `
                            <div class="connection-item">
                                <i class="connection-icon ${icon}"></i>
                                <div>
                                    <strong>${conn.name}</strong><br>
                                    <small>${conn.relation}</small>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }
        
        // Crear HTML del cuerpo del modal
        modalBody.innerHTML = `
            <div class="modal-section">
                <h4>Description & Comparisons</h4>
                <div class="modal-item">
                    <i class="modal-icon fas fa-user"></i>
                    <div>${member.description}</div>
                </div>
                ${connectionsHTML}
            </div>
            
            <div class="modal-section">
                <h4>Likes & Dislikes</h4>
                <div class="modal-item">
                    <i class="modal-icon fas fa-heart"></i>
                    <div><strong>Loves/Likes:</strong> ${member.likes ? member.likes.join(', ') : 'Not specified'}</div>
                </div>
                <div class="modal-item">
                    <i class="modal-icon fas fa-times-circle"></i>
                    <div><strong>Hates/Doesn't like:</strong> ${member.dislikes ? member.dislikes.join(', ') : 'Not specified'}</div>
                </div>
                ${likesHTML || dislikesHTML ? `
                <div class="like-dislike" style="margin-top: 10px;">
                    ${likesHTML} ${dislikesHTML}
                </div>
                ` : ''}
            </div>
            
            <div class="modal-section">
                <h4>Skills & Activities</h4>
                <div class="modal-item">
                    <i class="modal-icon fas fa-cogs"></i>
                    <div>${member.skills}</div>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>Feelings & Emotions</h4>
                <div class="modal-item">
                    <i class="modal-icon fas fa-smile"></i>
                    <div>${member.feelings}</div>
                </div>
            </div>
        `;
        
        // Mostrar modal
        modal.classList.add('active');
    }
    
    // Función para resaltar conexiones
    function highlightConnections(memberId) {
        // Primero quitar cualquier resaltado anterior
        clearHighlights();
        
        // Resaltar la tarjeta seleccionada
        const selectedCard = document.querySelector(`.tree-member[data-member="${memberId}"] .member-card`);
        if (selectedCard) {
            selectedCard.style.boxShadow = "0 0 0 3px rgba(76, 139, 245, 0.5), 0 8px 20px rgba(0, 0, 0, 0.15)";
            selectedCard.style.borderColor = "#4c8bf5";
            selectedCard.style.borderWidth = "3px";
        }
    }
    
    // Función para limpiar resaltados
    function clearHighlights() {
        const allCards = document.querySelectorAll('.member-card');
        allCards.forEach(card => {
            card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
            if (!card.parentElement.classList.contains('member-deceased')) {
                card.style.borderColor = "#d4c9b1";
                card.style.borderWidth = "2px";
            }
        });
        
        // Restaurar mi propio resaltado
        const myCard = document.querySelector('.tree-member[data-member="axel"] .member-card');
        if (myCard) {
            myCard.style.borderColor = "#4c8bf5";
            myCard.style.borderWidth = "3px";
        }
    }
    
    // Dibujar conexiones del árbol
    drawTreeConnections();
    
    function drawTreeConnections() {
        const svg = document.getElementById('treeConnections');
        if (!svg) return;
        
        // Limpiar SVG
        svg.innerHTML = '';
        
        // Obtener posiciones de los elementos
        const positions = {};
        
        // Posiciones de cada generación
        const generations = document.querySelectorAll('.generation');
        const memberCards = document.querySelectorAll('.tree-member');
        
        // Mapear posiciones
        memberCards.forEach(card => {
            const id = card.getAttribute('data-member');
            if (id) {
                const rect = card.getBoundingClientRect();
                const treeRect = document.querySelector('.tree').getBoundingClientRect();
                
                positions[id] = {
                    x: rect.left + rect.width/2 - treeRect.left,
                    y: rect.top + rect.height/2 - treeRect.top
                };
            }
        });
        
        // Conexiones específicas
        const connections = [
            // Leonila a Maritza (madre-hija)
            { from: "leonila", to: "maritza", dashed: false },
            
            // José y Maritza (esposos)
            { from: "jose", to: "maritza", dashed: false },
            
            // José y Maritza a sus hijos
            { from: "jose", to: "eyllin", dashed: false },
            { from: "jose", to: "axel", dashed: false },
            { from: "jose", to: "diego", dashed: false },
            { from: "jose", to: "ashlly", dashed: false },

            { from: "maritza", to: "eyllin", dashed: false },
            { from: "maritza", to: "axel", dashed: false },
            { from: "maritza", to: "diego", dashed: false },
            { from: "maritza", to: "ashlly", dashed: false },
            
            // Diego a sus hijos
            { from: "diego", to: "greyshel", dashed: false },
            { from: "diego", to: "pedro", dashed: false },
            
            // Eyllin a su hijo
            { from: "eyllin", to: "neythan", dashed: false },
            
            // Ashlly a Ricardo (novios)
            { from: "ashlly", to: "ricardo", dashed: true },
            
            // Diego a ex-parejas
            { from: "diego", to: "ex1", dashed: true },
            { from: "diego", to: "ex2", dashed: true },
            
            // Eyllin a ex-pareja
            { from: "eyllin", to: "ex3", dashed: true },
            
            // Ex-parejas a hijos
            { from: "ex1", to: "greyshel", dashed: true },
            { from: "ex2", to: "pedro", dashed: true },
            { from: "ex3", to: "neythan", dashed: true }
        ];
        
        // Dibujar conexiones
        connections.forEach(conn => {
            if (positions[conn.from] && positions[conn.to]) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', positions[conn.from].x);
                line.setAttribute('y1', positions[conn.from].y);
                line.setAttribute('x2', positions[conn.to].x);
                line.setAttribute('y2', positions[conn.to].y);
                line.classList.add('connection-line');
                
                if (conn.dashed) {
                    line.classList.add('dashed-line');
                    line.setAttribute('stroke', '#aaa');
                }
                
                svg.appendChild(line);
            }
        });
    }
    
    // Redibujar conexiones al redimensionar
    window.addEventListener('resize', drawTreeConnections);
});