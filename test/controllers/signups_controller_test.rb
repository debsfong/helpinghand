require 'test_helper'

class SignupsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get signups_index_url
    assert_response :success
  end

  test "should get new" do
    get signups_new_url
    assert_response :success
  end

  test "should get show" do
    get signups_show_url
    assert_response :success
  end

  test "should get create" do
    get signups_create_url
    assert_response :success
  end

  test "should get update" do
    get signups_update_url
    assert_response :success
  end

  test "should get edit" do
    get signups_edit_url
    assert_response :success
  end

end
