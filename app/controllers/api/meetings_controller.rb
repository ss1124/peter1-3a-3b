class Api::MeetingsController < ApplicationController
  def index
    @meetings = current_user.meetings
    render "api/meetings/index"
  end

  def show_slots_of_doctor
    @meetings = User.find(params[:id]).slots
    render "api/meetings/index"
  end

  def create
    @meeting = Meeting.new(meeting_params)
    if @meeting.save
      render "api/meetings/show"
    else
      render json: ["Try creating the meeting at a later time."]
    end
  end

  def destroy
    @meeting = Meeting.find_by(id: params[:id])
    @meeting.destroy
    render "api/meetings/show"
  end

  def show
    debugger
    @meeting = Meeting.find_by(id: params[:id])
    debugger
    render "api/meetings/show"
  end


  def update
    debugger
    @meeting = Meeting.find(params[:id]) 
    debugger
    if @meeting.update_attributes(meeting_params)
      debugger
      render "api/meetings/show"
    else
      debugger
      render json: ["unable to update meeting"]
    end
    debugger
  end

private
  def meeting_params
    params.require(:meeting).permit(:begin_time, :end_time, :doctor_id, :patient_id)
  end

end