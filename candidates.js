const newCandidates = [
    { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
    { name: "Mario", skills: ["Python", "AWS"] },
    { name: "Jacquline", skills: ["JavaScript", "Azure"] },
    { name: "Kathy", skills: ["JavaScript", "Java"] },
    { name: "Anna", skills: ["JavaScript", "AWS"] },
    { name: "Matt", skills: ["PHP", "AWS"] },
    { name: "Matt", skills: ["PHP", ".Net", "Docker"] },
  ];


  const candidatesTable = document.getElementById("candidates");
  const jsCandidatesTable = candidatesTable.cloneNode(true);

  const phpTable = document.getElementById("candidates");
  const phpCandidatesTable = phpTable.cloneNode(true);
  

  removeRowsFromTable(jsCandidatesTable);
  const jsBody = jsCandidatesTable.getElementsByTagName('tbody')[0];

  removeRowsFromTable(phpCandidatesTable);
  const phpBody = phpCandidatesTable.getElementsByTagName('tbody')[0];

  const jsCandidates = filterCandidateBySkill(newCandidates, 'JavaScript')
  addCandidatesToTable(jsBody, jsCandidates)

  const phpCandidates = filterCandidateBySkill(newCandidates, 'PHP')
  addCandidatesToTable(phpBody, phpCandidates)

  document.body.appendChild(jsCandidatesTable);
  
  document.body.appendChild(phpCandidatesTable);
