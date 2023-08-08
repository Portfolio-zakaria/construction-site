package com.Gestion.sec;

public interface SecurityParams {

	public static final String JWT_HEADER_NAME="Authorization";
	public static final String SECRET="achaghourzakaria@gmail.com";
	public static final int EWPIRATION = 10*24*3600*1000;
	public static final String HEADER_PREFIX="Bearer ";
	
}
