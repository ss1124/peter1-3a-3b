class UpdateNullFalseOnBeginEndTimes < ActiveRecord::Migration[5.2]
  def change
    remove_column :meetings, :begin_time
    remove_column :meetings, :end_time
    add_column :meetings, :begin_time, :datetime, null: false
    add_column :meetings, :end_time, :datetime, null: false
    change_column_null :meetings, :patient_id, true
  end
end
