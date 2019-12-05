function removeRowsFromTable(table) {
    const rows = table.getElementsByTagName("tr");

    while (rows.length > 1) {
      table.deleteRow(1);
    }
  }

  function insertCandidate(tbody, name, skills) {
    const newRow = tbody.insertRow();
    const nameCell = newRow.insertCell();
    const skillCell = newRow.insertCell();

    const candidateName = document.createTextNode(name);
    const candidateSkills = document.createTextNode(skills.join(', '));

    nameCell.appendChild(candidateName);
    skillCell.appendChild(candidateSkills);
  }

  function addCandidatesToTable(table, candidates) {
    candidates.forEach(candidate => insertCandidate(table, candidate.name, candidate.skills));
  }

  function filterCandidateBySkill(candidates, skill) {
  return candidates.filter(candidate => candidate.skills.includes(skill));
}
