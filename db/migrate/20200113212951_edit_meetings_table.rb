class EditMeetingsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :meetings, :begin_time, :string
    change_column :meetings, :end_time, :string
  end
end
