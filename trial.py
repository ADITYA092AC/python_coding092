"""def pod(x,y,z):


    if x==y==7 or x==z==7 or y==z==7:
        print("invalid input")
    
    elif x==7:
        print(y*z)
    elif y==7:
        print(z)
    elif z==7:
        print(-1)
    
    else:
        print(x*y*z)

x=int(input())
y=int(input())
z=int(input())
pod(x,y,z)




print("1. euro \n 2.british pound \n 3.austrian_rolar \n 4.canda Dolar")

opt=int(input("please select your currency:"))
cur=int(input("please enter the money you need: "))
if opt==1:
    print("you will get ",0.01417*cur, " euro")
elif opt==2:
    print("you will get ",0.0100*cur, " british pound ")
elif opt==3:
    print("you will get ",0.02140*cur, " austrian_rolar")
elif opt==4:
    print("you will get ",0.02027*cur, " canda Dolar")


x=int(input("number of Rs.1 coins: "))
y=int(input("number of Rs.5 coins: "))


price=int(input("amount: "))

c5=price//5
c1=price%5



if c5>y :
    if c1>x:
        print("invalid")
    else:
        c1=(5*c1)+(c5-y)
        c5=y
elif c1>x :
    print("insufficient")

print("coins 5: ",c5)
print("coins 1: ",c1)

    
   







sen=input()
sen=sen.split(' ')
lc,nc=0,0

for i in range(len(sen)):
    if (ord(sen[i])>=65 and ord(sen[i])<=90) or  (ord(sen[i])>=97 and ord(sen[i])<=122):
        lc+=1
    elif (ord(sen[i])>=48 and ord(sen[i])<=57) :
          nc+=1
l=[lc,nc]
    
print(l)





l=[1,4,5,6,0,3,3]
s=6

for i in range(len(l)):
    for j in range(i+1,len(l)):
                   if l[i]+l[j]==6 and l[i]!=l[j]:
                       print(l[i],l[j])



st=input()
if len(st)>2:
    print(st[0:2]+st[-2:])
elif len(st)==2:
    print(st[0:2]+st[-2:]+st[0:2]+st[-2:])
else:
    print(-1)






st=input()
if len(st)>=3 :
    if st[-3:]=="ing":
        print(st+"ly")
    else:
        print(st+"ing")
else:
    print(st)




num=int(input())
com=str(num*2)
num=str(num)


for i in num:
    if i in com and len(com)==len(num):
        s=0
    else:
        s=1
        print(False)
        break
if s==0:
    print(True)




n=(21,23,15,16,7,9,2,4,2,12)

def mavg(a):
    count=0
    for i in a:
        if i>12.5:
            count+=1

    
    return ((count/10)*100)



print(mavg(n))




tran={"sadhi":"pelli","din":"roju","subescha":"subakansalu"}

print(tran.keys())



mat=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
for i in range(len(mat)):
    for j in range(len(mat[i])):
        if mat[i][j]%2==0:
            mat[i][j]=mat[i][j]**2
        else:
            mat[i][j]=mat[i][j]**3
print(mat)
"""
"""
mat=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
print([[ j**2 if j%2!=0 else j**3 for j in i] for i in mat ])
#[x if condition loop ]

for i in s:
    for j in i:
        if  j in stop:
            i.remove(j)
print(s)




sen=["a holy city of aydhya","a new world record was set","on the eve of diwali on tuesday"]
stop=["for","a","of","the"]
s=[i.split(" ") for i in sen ]
print([[i.remove(j)  for j in i]for i in s ])

def pd(n):
    n=str(n)
    if n==n[::-1]:
        return True
    

a=int(input())  
while a!=0:
    a+=1
    if pd(a)==True:
        print(a)
        break
    

hos={"p":"pread","o":"ortho","e":"enti"}
inp=[101,"o",102,'o',302,'p',305,'p',306,'p']
res=0
org=''
for i in inp:
    c=inp.count(i)
    if res<c:
        res=c
        org=i
print(hos[org])


    

x="i like Python"
y="java is a very popular language"

x=[i for i in x]
y=[i for i in y]
for i in x:
    if (i in y) and i!=' ':
        print(i,end='')

x="concatination"
y="catination"

x=[i for i in x]
y=[i for i in y]

xl=len(x)
yl=len(y)
max_l=0


for i in range(xl):
    for j in range(yl):
        if x[i]==y[j]:

            count=0
            cur1=i
            cur2=j
            result=""
            
            while cur1<xl and cur2<yl and x[cur1]==y[cur2]:

                count+=1
                result+=x[cur1]
                cur1+=1
                cur2+=1
            
            if max_l<count:
                max_l=count
                org_res=result
print(org_res)
                
            
"""























        







