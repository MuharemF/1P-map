const rowLayout = {
    A: {left: [], center: ['A109', 'A108', 'A107', 'A106', 'A105', 'A104', 'A103', 'A102', 'A101'], right: []},
    B: {left: ['B11', 'B9', 'B7', 'B5', 'B3', 'B1'], center: ['B110', 'B109', 'B108', 'B107', 'B106', 'B105', 'B104', 'B103', 'B102', 'B101'], right: ['B2', 'B4', 'B6', 'B8', 'B10', 'B12']},
    C: {left: ['C11', 'C9', 'C7', 'C5', 'C3', 'C1'], center: ['C111', 'C110', 'C109', 'C108', 'C107', 'C106', 'C105', 'C104', 'C103', 'C102', 'C101'], right: ['C2', 'C4', 'C6', 'C8', 'C10', 'C12']},
    D: {left: ['D11', 'D9', 'D7', 'D5', 'D3', 'D1'], center: ['D111', 'D110', 'D109', 'D108', 'D107', 'D106', 'D105', 'D104', 'D103', 'D102', 'D101'], right: ['D2', 'D4', 'D6', 'D8', 'D10', 'D12']},
    E: {left: ['E11', 'E9', 'E7', 'E5', 'E3', 'E1'], center: ['E111', 'E110', 'E109', 'E108', 'E107', 'E106', 'E105', 'E104', 'E103', 'E102', 'E101'], right: ['E2', 'E4', 'E6', 'E8', 'E10', 'E12']},
    F: {left: ['F15', 'F13', 'F11', 'F9', 'F7', 'F5', 'F3', 'F1'], center: ['F113', 'F112', 'F111', 'F110', 'F109', 'F108', 'F107', 'F106', 'F105', 'F104', 'F103', 'F102', 'F101'], right: ['F2', 'F4', 'F6', 'F8', 'F10', 'F12', 'F14', 'F16']},
    G: {left: ['G11', 'G9', 'G7', 'G5', 'G3', 'G1'], center: ['G113', 'G112', 'G111', 'G110', 'G109', 'G108', 'G107', 'G106', 'G105', 'G104', 'G103', 'G102', 'G101'], right: ['G2', 'G4', 'G6', 'G8', 'G10', 'G12']},
    H: {left: ['H11', 'H9', 'H7', 'H5', 'H3', 'H1'], center: ['H113', 'H112', 'H111', 'H110', 'H109', 'H108', 'H107', 'H106', 'H105', 'H104', 'H103', 'H102', 'H101'], right: ['H2', 'H4', 'H6', 'H8', 'H10', 'H12']},
    I: {left: ['I11', 'I9', 'I7', 'I5', 'I3', 'I1'], center: ['I113', 'I112', 'I111', 'I110', 'I109', 'I108', 'I107', 'I106', 'I105', 'I104', 'I103', 'I102', 'I101'], right: ['I2', 'I4', 'I6', 'I8', 'I10', 'I12']},
    J: {left: ['J11', 'J9', 'J7', 'J5', 'J3', 'J1'], center: ['J113', 'J112', 'J111', 'J110', 'J109', 'J108', 'J107', 'J106', 'J105', 'J104', 'J103', 'J102', 'J101'], right: ['J2', 'J4', 'J6', 'J8', 'J10', 'J12']},
    K: {left: ['K11', 'K9', 'K7', 'K5', 'K3', 'K1'], center: ['K113', 'K112', 'K111', 'K110', 'K109', 'K108', 'K107', 'K106', 'K105', 'K104', 'K103', 'K102', 'K101'], right: ['K2', 'K4', 'K6', 'K8', 'K10', 'K12']},
    L: {left: ['L11', 'L9', 'L7', 'L5', 'L3', 'L1'], center: ['L113', 'L112', 'L111', 'L110', 'L109', 'L108', 'L107', 'L106', 'L105', 'L104', 'L103', 'L102', 'L101'], right: ['L2', 'L4', 'L6', 'L8', 'L10', 'L12']},
    M: {left: ['M11', 'M9', 'M7', 'M5', 'M3', 'M1'], center: ['M113', 'M112', 'M111', 'M110', 'M109', 'M108', 'M107', 'M106', 'M105', 'M104', 'M103', 'M102', 'M101'], right: ['M2', 'M4', 'M6', 'M8', 'M10', 'M12']},
    N: {left: ['N11', 'N9', 'N7', 'N5', 'N3', 'N1'], center: ['N113', 'N112', 'N111', 'N110', 'N109', 'N108', 'N107', 'N106', 'N105', 'N104', 'N103', 'N102', 'N101'], right: ['N2', 'N4', 'N6', 'N8', 'N10', 'N12']},
    O: {left: [], center: ['O110', 'O109', 'O108', 'O107', 'O106', 'O105', 'O104', 'O103', 'O102', 'O101'], right: []},
};

function formatLabel(seatId) {
    if (/^[A-Z]\d+$/.test(seatId)) {
        if (/^[A-Z](109|110|111|112|113|101|102|103|104|105|106|107|108)$/.test(seatId)) {
            return seatId.slice(1);
        }
        return seatId;
    }
    return seatId;
}

function createSeatElement(seatId) {
    const seat = document.createElement('div');
    seat.className = 'seat';
    seat.id = seatId;
    seat.textContent = formatLabel(seatId);
    seat.setAttribute('data-seat', seatId);
    return seat;
}

function createAisle(extraClass = '') {
    const aisle = document.createElement('div');
    aisle.className = ['aisle', extraClass].filter(Boolean).join(' ');
    return aisle;
}

function createSeats() {
    const container = document.getElementById('seating');
    Object.entries(rowLayout).forEach(([row, layout]) => {
        const rowElement = document.createElement('div');
        if (row === 'O') {
            rowElement.className = 'row row-o';
            }
            else if (row === 'A') {
             rowElement.className = 'row row-a';
            }       
            else {
             rowElement.className = 'row';
            }
        
        const rowLabel = document.createElement('div');
        rowLabel.className = 'row-label';
        rowLabel.textContent = row;
        rowElement.appendChild(rowLabel);

        const leftBlock = document.createElement('div');
        leftBlock.className = 'seat-block odd-wrap';
        layout.left.forEach(seatId => leftBlock.appendChild(createSeatElement(seatId)));
        rowElement.appendChild(leftBlock);

        if (row !== 'A') {
            const aisleClass = row === 'N' ? 'wide-aisle' : '';
            rowElement.appendChild(createAisle(aisleClass));
        }

        const centerBlock = document.createElement('div');
        centerBlock.className = 'seat-block center-block';
        layout.center.forEach(seatId => centerBlock.appendChild(createSeatElement(seatId)));
        rowElement.appendChild(centerBlock);

        if (row !== 'A') {
            rowElement.appendChild(createAisle());
        }

        const rightBlock = document.createElement('div');
        rightBlock.className = 'seat-block';
        layout.right.forEach(seatId => rightBlock.appendChild(createSeatElement(seatId)));
        rowElement.appendChild(rightBlock);

        container.appendChild(rowElement);
    });
}

function highlightSeat(seatId) {
    const normalized = seatId && seatId.trim().toUpperCase();
    document.querySelectorAll('.seat').forEach(seat => seat.classList.remove('lit'));
    if (!normalized) return;
    const seat = document.getElementById(normalized);
    if (seat) {
        seat.classList.add('lit');
        seat.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        alert('Seat not found: ' + normalized);
        console.log('Seat not found:', normalized);
    }
}

function getSeatFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('seat');
}

document.addEventListener('DOMContentLoaded', () => {
    createSeats();
    const seatFromQuery = getSeatFromQuery();
    if (seatFromQuery) {
        highlightSeat(seatFromQuery);
    }
});

window.highlightSeat = highlightSeat;