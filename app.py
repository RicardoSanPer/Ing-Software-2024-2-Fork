import pymysql

def mysqlconnect(): 
    # To connect MySQL database 
    conn = pymysql.connect( 
        host='localhost', 
        user='lab',  
        password = 'Developer123!', 
        db='RSP_Lab_Ing_P2', 
        ) 
      
    cur = conn.cursor() 
    cur.execute("select @@version") 
    output = cur.fetchall() 
    print(output) 
      
    # To close the connection 
    conn.close() 
  
# Driver Code 
if __name__ == "__main__" : 
    mysqlconnect()