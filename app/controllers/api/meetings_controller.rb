class Api::MeetingsController < ApplicationController
  def index
    @meetings = current_user.meetings
    render "api/meetings/index"
  end

  def show_slots_of_doctor
    @meetings = User.find(params[:id]).slots
    @time_zone = params[:time_zone]
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
    @meeting = Meeting.find_by(id: params[:id])
    render "api/meetings/show"
  end


  def update
    @meeting = Meeting.find(params[:id]) 
    if @meeting.update_attributes(meeting_params)
      render "api/meetings/show"
    else
      render json: ["unable to update meeting"]
    end
  end

private
  def meeting_params
    params.require(:meeting).permit(:begin_time, :end_time, :doctor_id, :patient_id, :time_zone)
  end

end