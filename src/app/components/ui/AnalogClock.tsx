'use client'
import React, { useEffect, useRef } from 'react'

const AnalogClock: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let radius = canvas.height / 2
        ctx.translate(radius, radius)
        radius *= 0.9

        const drawClock = () => {
            drawFace(ctx, radius)
            drawNumbers(ctx, radius)
            drawTime(ctx, radius)
        }

        const drawFace = (ctx: CanvasRenderingContext2D, radius: number) => {
            const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05)
            grad.addColorStop(0, '#333')
            grad.addColorStop(0.5, 'white')
            grad.addColorStop(1, '#333')
            ctx.beginPath()
            ctx.arc(0, 0, radius, 0, 2 * Math.PI)
            ctx.fillStyle = 'white'
            ctx.fill()
            ctx.strokeStyle = grad
            ctx.lineWidth = radius * 0.1
            ctx.stroke()
            ctx.beginPath()
            ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI)
            ctx.fillStyle = '#333'
            ctx.fill()
        }

        const drawNumbers = (ctx: CanvasRenderingContext2D, radius: number) => {
            ctx.font = `${radius * 0.15}px Arial`
            ctx.textBaseline = 'middle'
            ctx.textAlign = 'center'
            for (let num = 1; num < 13; num++) {
                const ang = (num * Math.PI) / 6
                ctx.rotate(ang)
                ctx.translate(0, -radius * 0.85)
                ctx.rotate(-ang)
                ctx.fillText(num.toString(), 0, 0)
                ctx.rotate(ang)
                ctx.translate(0, radius * 0.85)
                ctx.rotate(-ang)
            }
        }

        const drawTime = (ctx: CanvasRenderingContext2D, radius: number) => {
            const now = new Date()
            let hour = now.getHours()
            let minute = now.getMinutes()
            let second = now.getSeconds()

            
            hour %= 12
            hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60)
            drawHand(ctx, hour, radius * 0.5, radius * 0.07)

            
            minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60)
            drawHand(ctx, minute, radius * 0.8, radius * 0.07)

            
            second = (second * Math.PI) / 30
            drawHand(ctx, second, radius * 0.9, radius * 0.02)
        }

        const drawHand = (ctx: CanvasRenderingContext2D, pos: number, length: number, width: number) => {
            ctx.beginPath()
            ctx.lineWidth = width
            ctx.lineCap = 'round'
            ctx.moveTo(0, 0)
            ctx.rotate(pos)
            ctx.lineTo(0, -length)
            ctx.stroke()
            ctx.rotate(-pos)
        }

        const interval = setInterval(drawClock, 1000)
        drawClock() 

        return () => clearInterval(interval) 
    }, [])

    return <canvas ref={canvasRef} width={50} height={50} className='mt-2'></canvas>
}

export default AnalogClock
