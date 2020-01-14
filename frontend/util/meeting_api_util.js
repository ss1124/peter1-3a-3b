export const fetchMeetings = () => {
  return $.ajax({
    method: "GET",
    url: "api/meetings"
  })
}

export const createMeeting = (meeting) => {
  return $.ajax({
    method: "POST",
    url: "api/meetings",
    data: { meeting }
  })
}

export const fetchMeeting = (id) => {
  debugger
  return $.ajax({
    method: "GET",
    url: `api/meetings/${id}`,
    data: id 
  })
}

export const updateMeeting = (meeting) => {
  return $.ajax({
    method: "PATCH",
    url: `api/meetings/${meeting.id}`,
    data: { meeting }
  })
}

export const deleteMeeting = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/meetings/${id}`,
  })
}

export const showSlotsOfDoctor = (id) => {
  debugger
  return $.ajax({
    method: "GET",
    url: `api/meetings/show_slots_of_doctor/${id}`,
  })
}