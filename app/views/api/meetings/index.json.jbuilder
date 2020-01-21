@meetings.each do |meeting|
  json.set! meeting.id do 
    json.partial! 'meeting', meeting: meeting
  end
end
json.time_zone @time_zone

