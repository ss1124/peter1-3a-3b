class CreateMeetings < ActiveRecord::Migration[5.2]
  def change
    create_table :meetings do |t|
      t.integer :user_id, null:false
      t.string :begin_time, null:false
      t.string :end_time, null:false
      t.timestamps
    end
  end
end
