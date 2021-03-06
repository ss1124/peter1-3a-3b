class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

private 
  def user_params
    #Remember when testing ajax, user must nest data as follows: data: {user: {username: testUsrnm, password: testPsswrd}}
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end

end