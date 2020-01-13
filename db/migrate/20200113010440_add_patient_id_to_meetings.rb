class AddPatientIdToMeetings < ActiveRecord::Migration[5.2]
  def change
    add_column :meetings, :patient_id, :string, null: false
    add_column :meetings, :doctor_id, :string, null: false
    remove_column :meetings, :user_id
  end
end
