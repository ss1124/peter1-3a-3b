class Meeting < ApplicationRecord
    validates :user_id, :begin_time, :end_time, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User  
end
