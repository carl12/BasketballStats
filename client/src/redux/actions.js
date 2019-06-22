

const addTeamData = (name, data) => ({
  type: 'ADD_TEAM_DATA',
  name,
  data,
});

const addTeam = name => (
  dispatch => (
    fetch(`/api/teams/${name}`)
      .then(res => res.json())
      .then(data => dispatch(addTeamData(name, data)))
  )
);

const removeTeam = name => ({
  type: 'REMOVE_TEAM',
  name,
});

const changeTeamData = (oldTeam, newTeam, data) => ({
  type: "CHANGE_TEAM",
  oldTeam,
  newTeam,
  data,
});


const changeTeam = (oldTeam, newTeam) => (
  dispatch => (
    fetch(`/api/teams/${newTeam}`)
      .then(res => res.json())
      .then(data => (
        dispatch(changeTeamData(oldTeam, newTeam, data))
      ))
  )
);

const changeStat = stat => ({
  type: 'CHANGE_STAT',
  stat,
});

