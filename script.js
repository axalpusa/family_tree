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
        image: "img/leonila.jpg",
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
        status: "Separated but not divorced from Maritza",
        description: "My father is 50 years old. He is younger than my mother. He is hardworking and responsible. He is calmer than my mother.",
        likes: ["cooking in his free time", "watching sports", "spending time with family"],
        dislikes: ["loud noises", "disorganization", "wasting money"],
        skills: "He is fixing things around the house. He is cooking. He works as a merchant.",
        feelings: "He is feeling proud of his children. He is happy with his life. He is sometimes tired from work.",
        image: "img/jose.jpg",
        color: "#4c8bf5",
        connections: [
            { type: "spouse", name: "Maritza Salazar Chiroque", relation: "Wife" },
            { type: "child", name: "Eyllin M. Puertas Salazar", relation: "Daughter" },
            { type: "child", name: "Axel A. Puertas Salazar", relation: "Son" },
            { type: "child", name: "Diego S. Puertas Salazar", relation: "Son" },
            { type: "child", name: "Ashlly T. Puertas Salazar", relation: "Daughter" }
        ]
    },
    "maritza": {
        name: "Maritza Salazar Chiroque",
        relation: "My Mother",
        age: "57 years (born 1967)",
        status: "Separated but not divorced from José, mother of 4 children",
        description: "My mother is 57 years old. She is older than my father. She is more talkative than my father. She is very caring and creative.",
        likes: ["gardening", "cooking", "knitting"],
        dislikes: ["messiness", "disrespect", "being late"],
        skills: "She is managing the household. She is gardening beautifully.",
        feelings: "She is feeling happy when the family is together. She is worried about her children sometimes. She is loving her role as a grandmother.",
        image: "img/maritza.jpeg",
        color: "#4c8bf5",
        connections: [
            { type: "spouse", name: "José M. Puertas Rondoy", relation: "Husband" },
            { type: "parent", name: "Leonila Chiroque Anastasio", relation: "Mother" },
            { type: "child", name: "Eyllin M. Puertas Salazar", relation: "Daughter" },
            { type: "child", name: "Axel A. Puertas Salazar", relation: "Son" },
            { type: "child", name: "Diego S. Puertas Salazar", relation: "Son" },
            { type: "child", name: "Ashlly T. Puertas Salazar", relation: "Daughter" }
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
        skills: "She is taking care of her baby. She is working from home.",
        feelings: "She is feeling tired but happy as a new mother. She is loving her son very much. She is adjusting to life as a single mother.",
        image: "img/eyllin.jpeg",
        color: "#2c5282",
        connections: [
            { type: "parent", name: "José Manuel Puertas Rondoy", relation: "Father" },
            { type: "parent", name: "Maritza Salazar Chiroque", relation: "Mother" },
            { type: "child", name: "Neythan", relation: "Son" },
            { type: "ex", name: "Unknown", relation: "Ex-partner (Father of Neythan)" },
            { type: "sibling", name: "Axel A. Puertas Salazar", relation: "Brother" },
            { type: "sibling", name: "Diego S. Puertas Salazar", relation: "Brother" },
            { type: "sibling", name: "Ashlly T. Puertas Salazar", relation: "Sister" }
        ]
    },
    "axel": {
        name: "Axel Alexandre Puertas Salazar",
        relation: "Myself",
        age: "30 years (born 1994)",
        status: "Single, no children",
        description: "I am 30 years old. I am younger than Eyllin but older than Diego and Ashlly. I am more interested in technology than my siblings. I am quieter than my sisters.",
        likes: ["cooking", "reading manhuas", "PC games"],
        dislikes: ["monotony", "loud parties", "hot weather"],
        skills: "I am studying web development. I am speaking English. I am helping my family with technology problems.",
        feelings: "I am feeling motivated about my studies. I am happy with my family. I am excited about the future.",
        image: "img/axel.jpg",
        color: "#4c8bf5",
        connections: [
            { type: "parent", name: "José M. Puertas Rondoy", relation: "Father" },
            { type: "parent", name: "Maritza Salazar Chiroque", relation: "Mother" },
            { type: "sibling", name: "Eyllin M. Puertas Salazar", relation: "Elder Sister" },
            { type: "sibling", name: "Diego S. Puertas Salazar", relation: "Younger Brother" },
            { type: "sibling", name: "Ashlly T. Puertas Salazar", relation: "Younger Sister" }
        ]
    },
    "diego": {
        name: "Diego Stefano Puertas Salazar",
        relation: "My Brother",
        age: "27 years (born 1997)",
        status: "Separated, has two children from different mothers",
        description: "Diego is 27 years old. He is younger than me but older than Ashlly. He is more outgoing than me. He is a caring father to his children.",
        likes: ["eating", "listening to music", "walking or discovering new places"],
        dislikes: ["drama", "impatience", "waking up early"],
        skills: "He is working in sales. He is visiting his children when possible.",
        feelings: "He is feeling happy when he sees his children. He is sometimes stressed about work. He is trying to be a good father.",
        image: "img/diego.jpg",
        color: "#2c5282",
        connections: [
            { type: "parent", name: "José M. Puertas Rondoy", relation: "Father" },
            { type: "parent", name: "Maritza Salazar Chiroque", relation: "Mother" },
            { type: "child", name: "Greichel R. Puertas Chiriguay", relation: "Daughter (Lives with grandmother)" },
            { type: "child", name: "Jaziel S. Puertas Rivera", relation: "Son (Lives in Piura)" },
            { type: "ex", name: "Unknown", relation: "Ex-partner (Mother of Greichel)" },
            { type: "ex", name: "Unknown", relation: "Ex-partner (Mother of Jaziel)" },
            { type: "sibling", name: "Eyllin M. Puertas Salazar", relation: "Sister" },
            { type: "sibling", name: "Axel A. Puertas Salazar", relation: "Brother" },
            { type: "sibling", name: "Ashlly T. Puertas Salazar", relation: "Sister" }
        ]
    },
    "ashlly": {
        name: "Ashlly Tatiana Puertas Salazar",
        relation: "My Youngest Sister",
        age: "20 years (born 2004)",
        status: "In a relationship, studying law and teaching English",
        description: "Ashlly is 20 years old. She is the youngest in our family. She is studying law and working as an English teacher.",
        likes: ["studying law", "teaching English", "spending time with Ricardo"],
        dislikes: ["injustice", "laziness", "wasting time"],
        skills: "She is studying law at university. She is teaching English to students. She is organizing her time very well.",
        feelings: "She is feeling busy with studies and work. She is happy in her relationship with Ricardo. She is excited about her future career.",
        image: "img/ashlly.jpg",
        color: "#4c8bf5",
        connections: [
            { type: "parent", name: "José M. Puertas Rondoy", relation: "Father" },
            { type: "parent", name: "Maritza Salazar Chiroque", relation: "Mother" },
            { type: "partner", name: "Ricardo", relation: "Boyfriend" },
            { type: "sibling", name: "Eyllin M. Puertas Salazar", relation: "Sister" },
            { type: "sibling", name: "Axel A. Puertas Salazar", relation: "Brother" },
            { type: "sibling", name: "Diego S. Puertas Salazar", relation: "Brother" }
        ]
    },
    "greichel": {
        name: "Greichel Rosemary Puertas Chiriguay",
        relation: "Diego's Daughter",
        age: "8 years old",
        status: "Lives with her grandmother",
        description: "Greichel is Diego's daughter. She is 8 years old. She lives with her grandmother. She is growing up fast.",
        likes: ["playing with friends", "drawing", "watching cartoons"],
        dislikes: ["homework", "bedtime", "vegetables"],
        skills: "She is learning in school. She is drawing beautiful pictures. She is speaking Spanish.",
        feelings: "She is feeling happy when she visits her father. She is missing her father when he is not there.",
        image: "img/greyshel.jpeg",
        color: "#2c5282",
        connections: [
            { type: "parent", name: "Diego Stefano Puertas Salazar", relation: "Father" },
            { type: "parent", name: "Unknown", relation: "Mother (Ex-partner of Diego)" },
            { type: "grandparent", name: "José M. Puertas Rondoy", relation: "Grandfather" },
            { type: "grandparent", name: "Maritza Salazar Chiroque", relation: "Grandmother" }
        ]
    },
    "jaziel": {
        name: "Jaziel Stefano Puertas Rivera",
        relation: "Diego's Son",
        age: "1.5 months old",
        status: "Lives in Piura with his mother",
        description: "Jaziel is Diego's son. He is 1.5 months old. He lives in Piura with his mother. He is just starting to smile.",
        likes: ["milk", "sleeping", "being held"],
        dislikes: ["being hungry", "loud noises", "being wet"],
        skills: "He is learning to smile. He is recognizing voices. He is sleeping most of the day.",
        feelings: "He is feeling comfortable with his mother. He is curious about sounds around him.",
        image: "img/jaziel.jpg",
        color: "#2c5282",
        connections: [
            { type: "parent", name: "Diego Stefano Puertas Salazar", relation: "Father" },
            { type: "parent", name: "Unknown", relation: "Mother (Ex-partner of Diego)" },
            { type: "grandparent", name: "José M. Puertas Rondoy", relation: "Grandfather" },
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
        image: "img/neythan.jpg",
        color: "#2c5282",
        connections: [
            { type: "parent", name: "Eyllin M. Puertas Salazar", relation: "Mother" },
            { type: "parent", name: "Unknown", relation: "Father (Ex-partner of Eyllin)" },
            { type: "grandparent", name: "José M. Puertas Rondoy", relation: "Grandfather" },
            { type: "grandparent", name: "Maritza Salazar Chiroque", relation: "Grandmother" }
        ]
    },
    "ricardo": {
        name: "Ricardo",
        relation: "Ashlly's Boyfriend",
        age: "Approximately 25-30 years",
        status: "In a relationship with Ashlly, not married",
        description: "Ricardo is Ashlly's boyfriend. He is a petroleum engineer but works as a mathematics teacher and is also studying education. He is intelligent and hardworking.",
        likes: ["teaching mathematics", "engineering projects", "spending time with Ashlly", "driving to the beach or countryside"],
        dislikes: ["laziness", "bad grades", "inefficiency"],
        skills: "He is teaching mathematics to students. He is working as a petroleum engineer. He is solving complex problems.",
        feelings: "He is feeling happy with Ashlly. He is busy with work and teaching. He is serious about his career.",
        image: "img/ricardo.jpg",
        color: "#4c8bf5",
        connections: [
            { type: "partner", name: "Ashlly T. Puertas Salazar", relation: "Girlfriend" }
        ]
    }
};

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const modal = document.getElementById('memberModal');
    const modalClose = document.getElementById('modalClose');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalImg = document.getElementById('modalImg');
    const modalName = document.getElementById('modalName');
    const modalRelation = document.getElementById('modalRelation');
    const modalAge = document.getElementById('modalAge');
    const modalStatus = document.getElementById('modalStatus');
    const modalBody = document.getElementById('modalBody');
    const treeMembers = document.querySelectorAll('.tree-member[data-member]');
    
    // Mostrar modal al hacer clic en un miembro (solo los que tienen data-member)
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
        if (modalImg && member.image) {
            modalImg.src = member.image;
            modalImg.alt = member.name;
            modalImg.style.display = 'block';
        }
        
        // Establecer color del borde
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
        
        // Crear HTML del cuerpo del modal - ahora con 2 columnas
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
    setTimeout(drawTreeConnections, 100);
    
    function drawTreeConnections() {
        const svg = document.getElementById('treeConnections');
        if (!svg) return;
        
        // Limpiar SVG
        svg.innerHTML = '';
        
        // Obtener posiciones de los elementos
        const positions = {};
        
        // Mapear posiciones de TODOS los miembros
        const memberCards = document.querySelectorAll('.tree-member');
        
        memberCards.forEach(card => {
            const id = card.getAttribute('data-member');
            const rect = card.getBoundingClientRect();
            const treeRect = document.querySelector('.tree').getBoundingClientRect();
            
            if (id) {
                positions[id] = {
                    x: rect.left + rect.width/2 - treeRect.left,
                    y: rect.top + rect.height/2 - treeRect.top
                };
            }
        });
        
        // También mapear posiciones de los desconocidos (sin data-member)
        const unknownCards = document.querySelectorAll('.tree-member:not([data-member])');
        let unknownIndex = 0;
        unknownCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const treeRect = document.querySelector('.tree').getBoundingClientRect();
            positions[`unknown${unknownIndex}`] = {
                x: rect.left + rect.width/2 - treeRect.left,
                y: rect.top + rect.height/2 - treeRect.top
            };
            unknownIndex++;
        });
        
        // Conexiones específicas
        const connections = [
            // Esposo de Leonila a Leonila
            { from: "unknown0", to: "leonila", dashed: true },
            
            // Leonila a Maritza (madre-hija)
            { from: "leonila", to: "maritza", dashed: false },
            
            // José y Maritza (esposos)
            { from: "jose", to: "maritza", dashed: false },
            
            // Eyllin a su ex-pareja (unknown1)
            { from: "eyllin", to: "unknown1", dashed: true },
            
            // Eyllin a su hijo
            { from: "eyllin", to: "neythan", dashed: false },
            
            // Ex-pareja de Eyllin a Neythan
            { from: "unknown1", to: "neythan", dashed: true },
            
            // Diego a sus ex-parejas (unknown2 y unknown3)
            { from: "diego", to: "unknown2", dashed: true },
            { from: "diego", to: "unknown3", dashed: true },
            
            // Diego a sus hijos
            { from: "diego", to: "greichel", dashed: false },
            { from: "diego", to: "jaziel", dashed: false },
            
            // Ex-parejas de Diego a sus hijos
            { from: "unknown2", to: "greichel", dashed: true },
            { from: "unknown3", to: "jaziel", dashed: true },
            
            // Ashlly a Ricardo (novios)
            { from: "ashlly", to: "ricardo", dashed: true }
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
        
        // Dibujar conexiones de padres a hijos (sistema central)
        if (positions["jose"] && positions["maritza"]) {
            const centerX = (positions["jose"].x + positions["maritza"].x) / 2;
            const parentY = Math.max(positions["jose"].y, positions["maritza"].y);
            
            // Punto central debajo de los padres
            const centerPointY = parentY + 60;
            
            // Líneas verticales desde cada padre al punto central
            const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line1.setAttribute('x1', positions["jose"].x);
            line1.setAttribute('y1', positions["jose"].y + 40);
            line1.setAttribute('x2', positions["jose"].x);
            line1.setAttribute('y2', centerPointY);
            line1.classList.add('connection-line');
            svg.appendChild(line1);
            
            const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line2.setAttribute('x1', positions["maritza"].x);
            line2.setAttribute('y1', positions["maritza"].y + 40);
            line2.setAttribute('x2', positions["maritza"].x);
            line2.setAttribute('y2', centerPointY);
            line2.classList.add('connection-line');
            svg.appendChild(line2);
            
            // Línea horizontal que conecta las dos líneas verticales
            const horizontalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            horizontalLine.setAttribute('x1', positions["jose"].x);
            horizontalLine.setAttribute('y1', centerPointY);
            horizontalLine.setAttribute('x2', positions["maritza"].x);
            horizontalLine.setAttribute('y2', centerPointY);
            horizontalLine.classList.add('connection-line');
            svg.appendChild(horizontalLine);
            
            // Línea vertical central desde el punto medio
            const centerPointX = centerX;
            const verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            verticalLine.setAttribute('x1', centerPointX);
            verticalLine.setAttribute('y1', centerPointY);
            verticalLine.setAttribute('x2', centerPointX);
            verticalLine.setAttribute('y2', centerPointY + 60);
            verticalLine.classList.add('connection-line');
            svg.appendChild(verticalLine);
            
            // Punto donde se ramifica a los hijos
            const branchPointY = centerPointY + 60;
            
            // Posiciones aproximadas de los hijos (Eyllin, Axel, Diego, Ashlly)
            const childrenIds = ["eyllin", "axel", "diego", "ashlly"];
            const childrenPositions = childrenIds.map(id => positions[id]).filter(pos => pos);
            
            if (childrenPositions.length > 0) {
                // Ordenar posiciones por coordenada X
                childrenPositions.sort((a, b) => a.x - b.x);
                
                // Línea horizontal que conecta a todos los hijos
                const childrenHorizontalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                childrenHorizontalLine.setAttribute('x1', childrenPositions[0].x);
                childrenHorizontalLine.setAttribute('y1', branchPointY);
                childrenHorizontalLine.setAttribute('x2', childrenPositions[childrenPositions.length - 1].x);
                childrenHorizontalLine.setAttribute('y2', branchPointY);
                childrenHorizontalLine.classList.add('connection-line');
                svg.appendChild(childrenHorizontalLine);
                
                // Líneas verticales desde la línea horizontal a cada hijo
                childrenIds.forEach(childId => {
                    if (positions[childId]) {
                        const childVerticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        childVerticalLine.setAttribute('x1', positions[childId].x);
                        childVerticalLine.setAttribute('y1', branchPointY);
                        childVerticalLine.setAttribute('x2', positions[childId].x);
                        childVerticalLine.setAttribute('y2', positions[childId].y - 40);
                        childVerticalLine.classList.add('connection-line');
                        svg.appendChild(childVerticalLine);
                    }
                });
            }
        }
    }
    
    // Redibujar conexiones al redimensionar
    window.addEventListener('resize', drawTreeConnections);
    
    // Mostrar modal de Axel al cargar
    /*setTimeout(() => {
        showMemberModal('axel');
        highlightConnections('axel');
    }, 500);*/
});