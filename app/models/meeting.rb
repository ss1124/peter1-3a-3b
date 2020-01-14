class Meeting < ApplicationRecord
    validates :doctor_id, :begin_time, :end_time, presence: true

    belongs_to :doctor,
    foreign_key: :doctor_id,
    class_name: :User  

    
end
